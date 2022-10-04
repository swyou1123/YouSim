package com.ssafy.youtubeAnalysis.controller;

import com.ssafy.youtubeAnalysis.entity.Channel;
import com.ssafy.youtubeAnalysis.entity.Comment;
import com.ssafy.youtubeAnalysis.entity.Video;
import com.ssafy.youtubeAnalysis.repository.IWordAnalysisRepository;
import com.ssafy.youtubeAnalysis.repository.YoutubeService;
import com.ssafy.youtubeAnalysis.service.WordAnalysisService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.SparkSession;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import scala.Tuple2;

import java.io.*;
import java.util.*;

@Tag(name = "Youtube", description = "YoutubeAPI")
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/youtube")
public class YoutubeController {

    @Autowired
    YoutubeService youtubeService;

    @Operation(summary = "인기 영상 리스트", description = "인기 영상 카테고리 별 조회 API(0 전체)")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "인기 영상 조회", content = @Content(schema = @Schema(implementation = Video.class))),
    })
    @GetMapping("/popular")
    public ResponseEntity<List<Video>> popularVideos() throws IOException, ParseException {

        List<Video> result = youtubeService.getPopularVideos();

        return ResponseEntity.status(200).body(result);
    }

    @Operation(summary = "채널 ID 검색", description = "채널명으로 채널 ID 조회 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "채널 조회", content = @Content(schema = @Schema(implementation = Channel.class))),
    })
    @GetMapping("/search")
    public ResponseEntity<List<Channel>> searchChannelId(
            String title) throws Exception {

        List<Channel> result = youtubeService.searchChannelId(title);

        return ResponseEntity.status(200).body(result);
    }

    @Operation(summary = "인기 댓글 검색", description = "비디오 ID로 좋아요 많은 댓글 조회 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "인기 댓글 조회", content = @Content(schema = @Schema(implementation = Comment.class))),
    })
    @GetMapping("/comment")
    public ResponseEntity<List<Comment>> comments(
           String videoId) throws Exception {

        List<Comment> result = youtubeService.getComments(videoId);

        return ResponseEntity.status(200).body(result);
    }

    @Operation(summary = "최근 영상 검색", description = "채널 ID로 최근 영상 조회 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "최근 영상 조회", content = @Content(schema = @Schema(implementation = Video.class))),
    })
    @GetMapping("/detail")
    public ResponseEntity<List<Video>> details(
           String channelId, String nextToken) throws Exception {

        List<Video> result = youtubeService.getDetails(channelId, nextToken);

        return ResponseEntity.status(200).body(result);
    }

    private Logger log = Logger.getLogger(this.getClass());

    @Autowired
    private IWordAnalysisRepository wordAnalysisService;

//    @GetMapping(value = "/word/analysis")
//    @ResponseBody
//    public List<String> analysis() throws Exception {
//
//        log.info(this.getClass().getName() + ".inputForm !");
//
////        List<String> lines = Files.readAllLines(Paths.get("C:/Users/multicampus/Desktop/youtubedata.txt"));
////
////        System.out.println(lines);
////        youtubeService.searchCommentsByVideoID()
//
//        String line = "맛있는 김치찌개 맛있는 된장찌개";
//        List<String> rMap = null;
//        System.out.println(line);
//        rMap = wordAnalysisService.doWordAnalysis(line);
//
////        File file = new File("C:/Users/multicampus/Desktop/youtubedata.txt");
////        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
////            while ((line = br.readLine()) != null) {
////
////            }
////        } catch (IOException e) {
////            e.printStackTrace();
////        }
////
//////        Map<String, Integer> rMap = wordAnalysisService.doWordAnalysis(text);
//////
////        if (rMap == null) {
////
////        }
//
//
//        return rMap;
//    }

//    @GetMapping("/check/{검색어}")
//    public void getComments(@PathVariable String 검색어) throws Exception {
//
//        WordAnalysisService wordAnalysisService = new WordAnalysisService();
//
//        System.out.println("싯팔주소값 확인이나 하자" + System.identityHashCode(wordAnalysisService));
//
//        File file = new File("C:/Users/multicampus/Desktop/youtubedata.txt");
//        if (!file.exists()) {
//            file.createNewFile();
//        }
//
//        FileWriter fw = new FileWriter(file);
//        BufferedWriter writer = new BufferedWriter(fw);
//
//        System.setProperty("file.encoding", "utf-8");
//
//        List<String> commentList = new ArrayList<>();
////        String[] commentList = new String[100];
//
//
//        List<Channel> result = youtubeService.searchChannelId(검색어);
//
//
//        System.out.println("검색어에 대한 결과 채널들의 채널 아이디 추출");
//        System.out.println("result : " + result);
//        SparkSession sparkSession = SparkSession.builder().master("local").appName("Word Count").config("spark.mongodb.input.uri", "mongodb://j7c203.p.ssafy.io:27017/admin.data").getOrCreate();
//        JavaSparkContext sc = new JavaSparkContext(sparkSession.sparkContext());
//
//
////        for(int i=0; i<result.size();i++){
//        String 채널아이디 = result.get(0).getId();
//
//        File delDir = new File("/home/ubuntu/Data/" + 채널아이디);
//        if (delDir.exists()) {
//            FileUtils.deleteDirectory(delDir);
//        }
//
//        //
//
////        { "ch_id" : "UCFsyeRb-ShbdPQ2azhd6-fg",
////                "keyword" : {
////            "예술" : 1,
////                    "시발" : 2
////        }
////        }
//        //
//
//
////        writer.write("{ \"ch_id\" : \"" + 채널아이디 + "\",\n" + "\"keyword\" : "); // 검색했을때 검색결과에 제일 맞는 채널 아이디
////        System.out.println("채널아이디출력 " + 채널아이디 + " " + result.size());
//
//        List<Video> 채널상세정보리스트 = youtubeService.getDetails(채널아이디," ");
//        System.out.println("채널상세정보리스트출력한겁니다   " + 채널상세정보리스트);
//        List<Comment> 영상별댓글리스트 = null;
//        for (int i = 0; i < 채널상세정보리스트.size(); i++) {
//            String 영상아이디 = 채널상세정보리스트.get(i).getId();
//            System.out.println("영상아이디정보 출력 " + 영상아이디);
//            영상별댓글리스트 = youtubeService.getComments(영상아이디);
//            for (int j = 0; j < 영상별댓글리스트.size(); j++) {
//                String 영상별댓글 = 영상별댓글리스트.get(j).getContent();
//                System.out.println("영상별 댓글 : " + 영상별댓글);
//                commentList.add(영상별댓글);
////                writer.write(영상별댓글);
//            }
//
//        }
//
//        System.out.println("확인확인확인확인확인확인확인" + commentList);
//
//
//        List<String> 형태소분석 = wordAnalysisService.doWordAnalysis(String.valueOf(commentList));
////        Map<String, Integer> 형태소분석1 = wordAnalysisService.doWordAnalysisAndCount(String.valueOf(commentList));
////        String str = String.valueOf(형태소분석1).replaceAll("=", "\":");
////        str = str.replaceFirst("\\{", "\\{\"");
////        str = str.replaceAll(", ", ", \"");
//        writer.write(String.valueOf(형태소분석));
//
//        writer.close();
//
//        System.out.println("형태소분석 : " + 형태소분석);
//
//
//        System.out.println("스파크에돌릴데이터 : " + 형태소분석);
//        JavaRDD<String> data = sc.parallelize(형태소분석);
////        JavaRDD<String> data = sc.textFile("C:/Users/multicampus/Desktop/youtubedata.txt");
//
//
////        JavaRDD<String> wordsFromFile = data.flatMap(content -> content.lines().iterator());
//        JavaRDD<String> wordsFromFile = data.flatMap(content -> Arrays.asList(content.split(",")).iterator());
//
////        JavaRDD<String> wordsFromFile = data.flatMap(content -> Arrays.asList(String.valueOf(wordAnalysisService.doWordAnalysis(content))).iterator());
////        JavaRDD<String> wordsFromFile = data.flatMap(content -> (wordAnalysisService.doWordAnalysis(content)).iterator());
//
////        JavaRDD<String> wordsFromFile = data.flatMap(content ->(wordAnalysisService.doWordAnalysis(content)).iterator());
////        JavaRDD<String> wordsFromFile = data.map(content ->wordAnalysisService.doWordAnalysis(content).iterator());
////        JavaRDD<String> wordsFromFile = data.flatMap(
////                new FlatMapFunction<String, String>() {
////                    public Iterator<String> call(String s) throws Exception {
////                        return (wordAnalysisService.doWordAnalysis(s)).iterator());
////                    }
////                } );
//
//
//        JavaPairRDD countData = wordsFromFile.mapToPair(t -> new Tuple2(t, 1)).reduceByKey((x, y) -> (int) x + (int) y);
////		JavaPairRDD countData  = wordsFromFile.mapToPair(t->new Tuple2(t,1)).reduceByKey((x,y)->(int)x+(int)y);
////        System.out.println(System.getProperty("utf-8")); // US-ASCII
////        File file2 = new File("C:\\Users\\multicampus\\Desktop\\0921git\\S07P22C203\\OutputPath1");
////        FileUtils.deleteDirectory(file2);
//
//        countData.saveAsTextFile("/home/ubuntu/Data/"+채널아이디);
//
//
//    }

    /*
     * 여기쯤에 spark 로 RDD별 형태소분석 돌려서 결과물 출력하는 코드 넣으면 끝 maybe
     * */
//    @GetMapping("/spark")
//    private void getNouns(String fileName) {
//
//
//    }
}
