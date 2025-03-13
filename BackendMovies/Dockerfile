# Use an official Maven image to build the application
FROM maven:3.8.3-openjdk-17 AS build

WORKDIR /app

# Copy the project files to the container
COPY ./ ./

#This command downloads and caches all required dependencies for your Maven project before the actual build.
#This ensures that when mvn package runs, Maven doesn’t have to fetch dependencies from the internet again, speeding up subsequent builds.
#It is useful in Docker builds to avoid repeated dependency downloads when rebuilding the container.
RUN mvn dependency:go-offline

# Build the application
#clean: Deletes the target directory (where compiled files and artifacts from previous builds are stored).
#package: Compiles your project, runs any necessary processes (except tests, since we're skipping them), and packages the output as a .jar or .war file inside the target/ directory.
#-DskipTests: Skips running unit tests to speed up the build. This is helpful in Docker builds where tests might not be necessary.
RUN mvn clean package -DskipTests

# Use an OpenJDK image to run the application
FROM openjdk:17

WORKDIR /app

# Copy the built JAR file from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
