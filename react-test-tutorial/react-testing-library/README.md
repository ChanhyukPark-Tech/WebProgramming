## React 에서 testing library 를 사용해보기

## 동기

회사에서 진행하는 프로젝트를 유지보수 까지 하게 되었고, 개발 완료 일정상 TDD를 진행하진 못했지만, 기능 확장성, 유지보수를 용이하게 하기 위해서 해당 웹사이트에 해당하는 테스트코드를 구현하고자 하였다. 이때 어떠한 부분을 프론트엔드에서 테스트 해야하는지 그리고 어떻게 테스트하는지를 배우기 위해서 한 튜토리얼을 진행하고자 하였다.
물론 실무에서의 테스트코드와 다른부분이 있겠지만, 테스트 코드를 내가 내 손으로 실제로 구현해봄으로써 익숙해지고 그것을 토대로 실제 프로젝트에 적용하고자 한다.

## 과정

테스트는 사용자 관점에서 진행할 것이다. 앱의 코드와 그것의 구현 방식에 집중하는 대신에, 유저의 관점을 취할 것이다. 그것을 토대로 테스트 코드를 작성할 것이다.
사용자 입장에서 앱이 제대로 기능하기 위해서는 무엇이 중요한지 깨달아보자.

1. 사용자는 폼 입력에 값을 입력한뒤, 제출 버튼을 클릭한다.

[An in-depth beginner's guide to testing React applications in ](https://jkettmann.com/beginners-guide-to-testing-react) 를 참조하여 연습 진행하였습니다.
