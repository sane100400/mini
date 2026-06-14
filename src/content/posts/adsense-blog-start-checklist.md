---
title: "애드센스 승인, 글 개수보다 먼저 봐야 할 7가지 점검"
published: 2026-05-27
updated: 2026-06-11
description: "애드센스 신청 전에 글 개수만 세지 말고 주제 범위, 정책 페이지, sitemap, 실제 근거, 내부 링크를 점검하는 글."
image: "./images/google-adsense-start-screen.jpg"
tags: ["AdSense", "Blog", "SEO", "AI부업"]
category: "애드센스"
---

애드센스를 준비하면서 제일 많이 검색했던 질문은 결국 "승인 전에 글을 몇 개 써야 하나"였다. 10개면 충분하다는 사람도 있고, 30개는 채워야 한다는 사람도 있다. AI로 쓴 글은 안 된다는 말도 보이고, 상관없다는 말도 보인다. 한참 찾아보다가 어느 순간 깨달았는데, 이 질문 자체가 방향이 틀렸다. 글 개수만 세고 있으면 정작 사이트가 얇아 보인다는 문제를 놓친다.

그래서 신청 버튼을 누르기 전에, 내 블로그를 처음 방문한 사람의 눈으로 처음부터 끝까지 훑어봤다. 그 과정에서 고친 것들을 순서대로 적어둔다.

![Google AdSense 시작 페이지 화면](./images/google-adsense-start-screen.jpg)

_출처: [Google AdSense](https://www.google.com/adsense/start/) 화면 직접 캡처_

## 주제를 한 문장으로 말할 수 있는가

가장 먼저 막힌 게 이거였다. "이 블로그 무슨 블로그예요?"라는 질문에 한 문장으로 답이 안 나오면, 검색엔진이나 심사 담당자에게도 똑같이 흐릿하게 보일 것이다.

처음에는 "AI로 돈 버는 법"을 다루고 싶었다. 그런데 이런 주제는 쓰기는 쉬워도 본문이 금방 추천 목록으로 흘러버린다. 어디서 본 듯한 플랫폼 나열, 누구나 할 수 있는 말. 그래서 범위를 "한국인이 집에서 직접 확인 가능한 AI 부업"으로 좁혔다. 애드센스, AI 트레이닝 플랫폼, 바이브 코딩, 전자책, 숏폼 대본, 상세페이지 문구. 전부 내가 직접 화면을 열어보고 판단할 수 있는 주제들이다.

신기한 건, 주제를 좁히면 글감이 줄어들 것 같은데 실제로는 반대라는 점이다. "AI 부업 추천"이라는 제목 앞에서는 막막한데, "Outlier 공개 기회가 0으로 떠 있을 때 지원해도 되는가"라는 질문 앞에서는 쓸 말이 바로 떠오른다. 검색하는 사람도 마찬가지다. 넓은 주장보다 자기 상황에 딱 붙는 질문을 클릭한다.

## 글마다 직접 본 화면이 들어갔는가

문장만 매끈한 글은 애드센스용으로 부족하다고 느꼈다. 검색자가 "이 사람 실제로 확인하고 썼네"라고 느낄 근거가 필요하다. [Google의 유용한 콘텐츠 가이드](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)도 검색엔진이 아니라 사람을 먼저 생각하라고 반복해서 말한다.

그래서 글마다 최소한 하나는 넣기로 했다. 공식 서비스 화면 캡처(AdSense, Outlier, CapCut 같은), 공개 마켓 화면(크몽, Gumroad), 아니면 직접 만든 샘플. 이 글 상단의 대표 이미지도 Google AdSense 시작 페이지를 직접 캡처한 것이다. 애드센스 글에는 애드센스 화면이, 숏폼 글에는 CapCut 화면이 들어가야 정보 글로 보인다. 분위기용 스톡 이미지는 자리만 차지한다. 이미지는 장식이 아니라 근거다.

![Google 유용한 콘텐츠 가이드 화면](./images/screenshots/google-helpful-content-guide.png)

_출처: [Google Search Central 유용한 콘텐츠 가이드](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) 화면 직접 캡처_

## sitemap과 robots.txt 주소를 직접 열어봤다

검색엔진이 내 사이트 구조를 제대로 찾아가는지도 신청 전에 확인했다. 이 블로그는 Astro로 만들어서 `src/pages/rss.xml.ts`, `src/pages/robots.txt.ts`, sitemap 설정이 코드로 들어가 있다. 설정이 있다는 것과 실제로 동작한다는 건 다른 얘기라서, 브라우저 주소창에 하나씩 쳐봤다.

`/rss.xml`에 최신 글이 들어오는지, `/robots.txt`가 크롤러를 과하게 막고 있지 않은지, sitemap에 글 URL이 빠짐없이 잡히는지. [Google Search Central의 sitemap 안내](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)를 보면 robots.txt에 sitemap 위치를 적어두라는 내용도 있다.

![Google Search Console 소개 화면](./images/screenshots/google-search-console-about.png)

_출처: [Google Search Console](https://search.google.com/search-console/about) 화면 직접 캡처_

하나 주의할 점. [robots.txt 문서](https://developers.google.com/search/docs/crawling-indexing/robots/intro)를 읽어보면 이 파일은 크롤러 트래픽을 관리하는 용도지, 비공개 파일을 숨기는 보안 장치가 아니다. 검색에 노출되어도 괜찮은 글만 발행한다는 전제가 먼저다.

## 소개와 개인정보처리방침부터 채웠다

애드센스 블로그는 광고가 붙는 사이트다. 방문자 입장에서는 누가 쓰는 글인지, 광고와 쿠키 데이터를 어떻게 다루는지 알 수 있어야 한다. 그래서 글보다 페이지를 먼저 정리했다. 소개 페이지에는 블로그 주제와 운영자 관점, 그리고 다루지 않는 주제까지 적었다. 개인정보처리방침에는 광고·분석·쿠키 처리를, 문의 페이지에는 외주 문의와 오류 제보 경로를 넣었다.

솔직히 정책 페이지가 있다고 바로 승인되는 건 아닐 것이다. 그래도 없으면 확실히 허술해 보인다. 글 품질과 기본 페이지는 따로가 아니라 같이 가는 문제다.

## 정책 페이지를 실제로 어떻게 만들까

개인정보처리방침 페이지를 처음 만들 때 고민이 생긴다. 법적으로 복잡한 내용처럼 느껴지기 때문이다. 하지만 애드센스 블로그 수준에서는 몇 가지 핵심 사항만 명시하면 된다.

쿠키 사용 여부와 목적, Google Analytics나 AdSense 사용 여부, 데이터 수집 방식, 방문자 권리(쿠키 거부 방법). 이 네 가지를 솔직하게 적으면 된다. 완벽한 법적 문서보다 "이 사이트는 Google AdSense를 통해 광고를 게재하며, 이에 따라 쿠키가 사용됩니다"처럼 명확하게 적는 게 낫다.

## 첫 30개 글에는 서로 다른 질문을 맡겼다

글 개수를 숫자로만 채우면 비슷한 글이 늘어난다. 제목만 다르고 본문이 같은 글 다섯 개보다, 쓰임이 다른 글 다섯 개가 사이트를 두껍게 만든다.

내가 나눈 쓰임은 다섯 가지다. 검색 유입을 만드는 글(플랫폼 한국어 작업 조건 확인 같은), 비교 판단을 돕는 글(플랫폼별 심사·일감·언어 조건), 실무 샘플을 보여주는 글(포트폴리오 샘플 3개), 수익으로 연결하는 글(전자책 업데이트 로그), 그리고 운영 기록(30일 운영표). 승인 전 글 개수가 10개냐 30개냐에 정답은 없지만, 각 글이 서로 다른 질문에 답하고 있는지에는 답이 있다.

## 내부 링크 구조가 생각보다 중요하다

글이 20~30편 쌓이면 내부 링크를 빠뜨리기 쉽다. 그런데 내부 링크는 검색엔진이 사이트 구조를 파악하는 데도 도움이 되고, 방문자가 관련 글을 찾아보는 데도 도움이 된다.

내가 쓰는 방식은 글 하나를 발행할 때마다 이 글과 연결될 수 있는 기존 글 2~3개에 링크를 추가하는 것이다. 단방향이 아니라 상호 링크로 만들면 더 좋다. "이 주제가 궁금하다면 [관련 글] 참고"라는 한 문장이 독자 이탈을 줄이고 체류 시간을 높인다.

## 모바일에서 한 번 더 봤다

애드센스 블로그는 모바일 유입이 많다. PC에서 멀쩡하던 표가 폰에서 가로 스크롤로 깨지고, 이미지 글자가 안 읽히고, 광고가 본문을 가리는 일은 흔하다. [Google의 페이지 경험 문서](https://developers.google.com/search/docs/appearance/page-experience)도 한두 지표가 아니라 전체 경험을 보라고 말한다. 발행 전에 폰으로 첫 화면, 표 줄바꿈, 이미지 가독성, 내부 링크 위치를 한 번씩 확인하는 습관을 들였다.

## 신청 버튼은 마지막에 눌렀다

애드센스 신청은 준비의 시작이 아니라 점검의 마지막 단계로 뒀다. 누르기 직전에 본 최종 체크리스트는 이랬다.

| 체크 항목 | 내 상태 |
| --- | --- |
| 블로그 주제가 한 문장으로 설명되는가 | 한국인이 집에서 확인하는 AI 부업 |
| 글마다 하나의 질문과 결론이 있는가 | 각 글 제목에서 질문을 좁힘 |
| 공식 화면이나 직접 만든 샘플이 있는가 | AdSense, Outlier, CapCut, Cursor 캡처 사용 |
| 기본 페이지와 sitemap이 있는가 | 소개, privacy, RSS, robots.txt 확인 |
| 다음 글로 이어지는 내부 링크가 있는가 | 애드센스, 포트폴리오, 전자책 글 연결 |
| 모바일에서 표와 이미지가 깨지지 않는가 | 발행 전 폰으로 확인 |
| 개인정보처리방침 페이지가 있는가 | AdSense, Analytics 사용 명시 |

## 승인 후에도 점검을 이어가야 한다

승인이 났다고 끝이 아니다. ads.txt 파일이 정상적으로 배포되어 있는지 확인해야 하고, 광고 배치가 글 읽기를 방해하지 않는지도 봐야 한다. 자동 광고를 쓴다면 어디에 어떻게 배치되는지 모바일에서 한 번 더 확인한다.

그리고 무효 트래픽 관련해서 주의할 것들은 승인 후에도 이어진다. 광고를 눌러보고 싶은 유혹, 지인에게 클릭을 부탁하는 것, 광고를 버튼처럼 보이게 배치하는 것. 초반 수익이 작더라도 계정이 흔들리면 전부 손해다.

돌아보면 애드센스 블로그를 시작한다는 건 광고 코드를 붙이는 일이 아니었다. 특정한 문제를 꾸준히 다루는 사이트를 만드는 일이었다. 이 블로그는 집에서 확인 가능한 AI 부업을 실제 화면과 작은 결과물로 검토하는 방향으로 계속 간다.

승인 후 실제 RPM과 페이지뷰 계산 방법은 [애드센스 실제 수익 계산 글](/posts/adsense-real-earnings-overseas-reviews/)에서 이어간다.

참고한 공식 문서: [Google AdSense](https://www.google.com/adsense/start/), [AdSense Program policies](https://support.google.com/adsense/answer/48182), [Google 유용한 콘텐츠 가이드](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Google sitemap 안내](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [robots.txt 안내](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
