# next js introduction

### 배운점

- nextjs 에서의 routing 및 pages
- nextjs 에서 style 하는법(여러가지)
- `<style>` 태그를 사용해서 style 하는법
- _app.js 파일을 통해서 global 적인 configuration 하는법
- 라이브러리와 프레임워크의 차이점
- Layout Patterns for simple _app.js
- HIDE `API KEY` In Nextjs (.env) 
- request 에 mask 를 씌우는 rewrite & redirect
- `server side rendering`
- Dynamic Routes
- Routing 될때 state 도 같이 넘겨주는 방법 ( + url masking 방법 )
- catch-all URL
- custom 404 page


### SSR
서버 사이드 렌더링이란 서버(백엔드) 에서 페이지를 그려 클라이언트(브라우저)로 보낸 후 화면에 표시하는 기법을 의미합니다.

### 서버 사이드 렌더링과 클라이언트 사이드 렌더링 차이점

그럼 서버 사이드의 렌더링은 앞에서 살펴본 클라이언트 사이드 렌더링과 무슨 차이점이 있을까요? 바로 어디서 화면에 보일 페이지의 내용을 그리느냐의 차이입니다. 클라이언트 사이드 렌더링은 페이지의 내용을 브라우저에서 그리고 서버 사이드 렌더링은 서버에서 페이지의 내용을 다 그려서 브라우저로 던져줍니다. 아래와 같이 말이죠.


![image](https://user-images.githubusercontent.com/69495129/152095068-5ae650f4-b0fe-4da2-b260-ecca403acb4c.png)

서버사이드 랜더링은 서버에서 html 작업후 넘겨준다

### 서버 사이드 렌더링을 왜 쓸까?

서버 사이드 렌더링을 쓰는 목적은 크게 "검색 엔진 최적화"와 "빠른 페이지 렌더링"입니다. 검색 엔진 최적화란 구글, 네이버와 같은 검색 사이트에서 검색했을 때 결과가 사용자에게 많이 노출될 수 있도록 최적화 하는 기법입니다. 특히, SNS에서 링크를 공유했을 때 해당 웹 사이트의 정보를 이미지와 설명으로 표시해주는 OG(Open Graph) Tag를 페이지 별로 적용하기 위해서는 서버 사이드 렌더링이 효율적입니다.

### 서버 사이드 렌더링의 단점

이렇게만 보면 서버 사이드 렌더링을 하는게 좋겠네 라고 생각하실 수 있지만 시작하기 전에 주의해야 할 점이 있습니다. 서버 사이드 렌더링은 Node.js 웹 애플리케이션 실행 방법을 알아야하고 서버쪽 환경 구성과 함께 클라이언트, 서버 빌드에 대한 이해가 필요합니다. 따라서, 프런트엔드 개발 입문자 입장에서는 쉽지 않은 진입 장벽이 존재합니다.

또한, Node.js 환경에서 실행되기 때문에 브라우저 관련 API를 다룰 때 주의해야 합니다. 뷰 싱글 페이지 애플리케이션의 라이프 사이클 훅과는 다른 환경(브라우저가 아닌 Node.js)에서 동작하기 때문에 beforeCreate와 created에서 window나 document와 같은 브라우저 객체에 접근할 수 없습니다.



### Summary

- 큰 어플리케이션 단위가 아닌, 페이지 단위로 생각


### 참조자료

- [joshua1998님 블로그](https://joshua1988.github.io/vue-camp/nuxt/ssr.html#%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3-%E1%84%85%E1%85%A6%E1%86%AB%E1%84%83%E1%85%A5%E1%84%85%E1%85%B5%E1%86%BC%E1%84%8B%E1%85%B4-%E1%84%83%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B7)
