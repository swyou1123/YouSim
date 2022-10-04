FROM openjdk:11
RUN ./gradlew build
ADD /build/libsyoutubeAnalysis-0.0.1-SNAPSHOT.jar app.jar
ENV JAVA_OPTS=""
ENTRYPOINT ["java","-jar","/app.jar"]


