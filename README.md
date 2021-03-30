# calfisher.com v2
Second edition of calfisher.com. Still written with HTML, CSS, and AngularJS, but now implementing better development practices and infrastructure.

- [Development](#development)
    - [Docker Build](#docker-build)
    - [Docker Run](#docker-run)
    - [Docker Stop](#docker-stop)
- [Release](#release)
- [Infrastructure](#infrastructure)
    - [Fargate Cluster](#fargate-cluster)
    - [Route53](#route53)
        - [Add WWW Record](#add-www-record)
- [Deployment](#deplyment)
- [Features](#features)
    - [Angular](#angular)
    - [Font Awesome](#font-awesome)
    - [STL Viewer](#stl-viewer)

## Development
### Docker Build
```
docker build -t calfisherportfolio:$(cat .version) .
```

### Docker Run
```
docker run --rm -d -p 80:80 calfisherportfolio:$(cat .version)
```

* For more rapid development, mount the volume of the site contents:
    ```
    docker run --rm -d -p 80:80 -v ~/workspace/calfisherportfolio/portfolio:/usr/share/portfolio calfisherportfolio:$(cat .version)
    ```

* Site will be running at:
    ```
    http://localhost:80/
    ```

### Docker Stop
```
docker stop $(docker ps | grep "calfisherportfolio:$(cat .version)" | awk '{print $1;}')
```

**Note:** This command will stop all containers that match the `grep` patten

* Explanation:
    1. `docker ps` outputs a table of all running containers
        * Example `docker ps` output:
            ```
            CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS              PORTS                NAMES
            b28fabd5293b        calfisherportfolio:2.0.0-SNAPSHOT   "nginx -g 'daemon of…"   44 minutes ago      Up 44 minutes       0.0.0.0:80->80/tcp   friendly_babbage
            ```

    2. `grep "calfisherportfolio:$(cat .version)"` will return any lines of the `docker ps` output that contain the Docker image name
        * Output of `docker ps | grep "calfisherportfolio:$(cat .version)"`:
            ```
            b28fabd5293b        calfisherportfolio:2.0.0-SNAPSHOT   "nginx -g 'daemon of…"   44 minutes ago      Up 44 minutes       0.0.0.0:80->80/tcp   friendly_babbage
            ```

    3. `awk '{print $1;}'` will output the first column, which is the container id
        * Output of `docker ps | grep "calfisherportfolio:$(cat .version)" | awk '{print $1;}'`
            ```
            b28fabd5293b
            ```

    4. The container id is used in the `docker stop` command to stop the running container:
        ```
        docker stop b28fabd5293b
        ```

## Release
* **Note:** Currently, this release process is manual but will be automated in the future.

* Steps:
    1. Update [.version](.version) file to the release version
        * i.e. from `1.7.3-SNAPSHOT` to `1.7.3`

    2. Commit release version
        ```
        git commit -am "Release Version: $(cat .version)"
        ```

    3. Create tag:
        ```
        git tag $(cat .version)
        ```

    5. Update [.version](.version) to the next development version
        * i.e. from `1.7.3` to `1.8.0-SNAPSHOT`

    6. Commit next development version
        ```
        git commit -am "Next Development Version: $(cat .version)"
        ```

    4. Push commits and tags
        ```
        git push origin master && git push --tags
        ```

## Infrastructure

### Fargate Cluster

For learning purposes, I followed this guide to stand up a Fargate cluster to run my web application: [](https://aws.amazon.com/blogs/compute/building-deploying-and-operating-containerized-applications-with-aws-fargate)

Using a Cloudformation template, I can stand up the infrastructure in AWS with the following command:
```
aws cloudformation create-stack \
  --stack-name calfisher \
  --template-body file://config/infrastructure/calfisher_fargate.yml \
  --capabilities CAPABILITY_NAMED_IAM
```

Subsequent change to the CloudFormation template can be applied with this command:
```
aws cloudformation update-stack \
  --stack-name calfisher \
  --template-body file://config/infrastructure/calfisher_fargate.yml \
  --capabilities CAPABILITY_NAMED_IAM
```

Future CloudFormation Learning:
* AWS CloudFormation Designer:
    * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/working-with-templates-cfn-designer-walkthrough-createbasicwebserver.html

### Route53
In order to route the requests to calfisher.com to the web application running in Fargate (using the ALB), follow these steps:
1. Go to Route53
2. Go to Hosted Zones
3. Go to calfisher.com
4. Click `Create Record`
5. Choose routing policy: `Simple routing`
6. Click `Define Simple Record`
7. Record type: `A - Routes traffic to an IPV4 address and some AWS resources`
8. Value/Route traffic to:
    1. Choose endpoint: `Alias to Application and Classic Load Balancer`
    2. Choose Region: `US East (Ohio)[us-east-2]`
    3. Choose load balancer
9. Click `Define simple record`

#### Add WWW Record

1. Go to Route53
2. Go to Hosted Zones
3. Go to calfisher.com
4. Click `Create Record`
5. Choose routing policy: `Simple routing`
6. Click `Define Simple Record`
7. Record name: `www.calfisher.com`
8. Record type: `A - Routes traffic to an IPV4 address and some AWS resources`
9. Value/Route traffic to:
    1. Choose endpoint: `Alias to another record in this hosted zone`
    2. Choose Region: `US East (N.Virginia)[us-east-1]`
    3. Choose record

### S3 Hosted

Route53, S3, CloudFront

Set up HTTPS with CloudFront: https://www.youtube.com/watch?v=uwgB_sIhIko

1. Set up calfisher.com and www.calfisher.com S3 buckets
    * calfisher.com has contents
        * Bucket Policy:
            ```
            {
                "Version": "20120-10-17",
                "Statement": [
                    {
                        "Sid": "PublicReadGetObject",
                        "Effect": "Allow",
                        "Principal": {
                            "AWS": "*"
                        },
                        "Action": "s3:GetObject",
                        "Resource": "arn:aws:s3:::calfisher.com/*
                    }
                ]
            }
            ```
    * www.calfisher.com redirects to calfisher.com
2. Set up CloudFront
    * Rather than using the S3 resources, copy the S3 bucket website

Update Github workflow to zip and upload to S3?

## Deployment
The deployment is orchestrated through a [Github Actions](https://github.com/features/actions) workflow.

See [.github/workflows/aws.yml](.github/workflows/aws.yml) for workflow configuration and [config/ecs_task_def.json](config/ecs_task_def.json) for ECS Task Definition

## Features
### Angular
https://angularjs.org/

### Font Awesome
https://fontawesome.com/

### STL Viewer
https://www.viewstl.com/plugin/

## Images
Images will eventually be hosted in S3 (ideally). For now, I reduce the image size to improve upload/download time and page performance.

Guide:
* https://docs.gimp.org/2.8/en/gimp-using-web.html
* https://smallbusiness.chron.com/optimize-images-gimp-45437.html

Steps:
1. Open image in GIMP
2. Image > Flatten Image
3. Image > Scale Image
    * Whichever is larger, height or width, is set to 1024
4. Image > Mode > Indexed
    * Generate Optimum Palette
    * Maximum number of colors: 255
    * Convert
5. Export as PNG
