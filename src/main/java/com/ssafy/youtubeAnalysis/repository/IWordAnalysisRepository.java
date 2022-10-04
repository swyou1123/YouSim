package com.ssafy.youtubeAnalysis.repository;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface IWordAnalysisRepository {

    //자연어 처리 - 형태소 분석 (명사만 추출하기)
    List<String> doWordNouns(String text) throws Exception;

    //빈도수 분석(단어별 출현 빈도수)
    Map<String, Integer> doWordCount(List<String> pList) throws Exception;

    //분석할 문장의 자연어 처리 및 빈도수 분석 수행
    List<String> doWordAnalysis(String text) throws Exception ;


}