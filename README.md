# calfisher.com v2
Second edition of calfisher.com. Still written with HTML, CSS, and AngularJS, but now implementing better development practices and organization.

- [Development](#development)
    - [Docker Build](#docker-build)
    - [Docker Run](#docker-run)
    - [Docker Stop](#docker-stop)
- [Release](#release)
- [Deployment](#deplyment)
- [Features](#features)
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

## Deployment
TODO: Setup automated AWS Fargate deployment and document here

## Features
### Angular
https://angularjs.org/

### Font Awesome
https://fontawesome.com/

### STL Viewer
https://www.viewstl.com/plugin/
