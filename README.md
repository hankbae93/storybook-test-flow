# 🕹️ To do list로 보는 Storybook의 UI 개발 및 Test Flow

```bash
yarn create react-app ./ --template typescript
npx sb init
```

<br />

# 🐼 Intro

![TODO](./docs/example.png)

Storybook에서 예시로 사용하는 Todolist App을 만들어보겠습니다.

<br />

# UI Spec

![TODO](./docs/todo1.png)

Todo UI의 기능 명세는 이렇습니다.

- `TodoData`
  - `title` : Todo의 내용
  - `state` : Todo의 완료 여부
- `pinned` : Todo 상단 고정 여부
- `onEditTitle` : Todo의 제목을 수정할 수 있다
- `onTogglePinTask` : 목록 중에서 상단으로 고정할 수 있다.
- `onArchiveTodo` : Todo를 완료시킬 수 있다.

그리고 `Todolist`는 이 `Todo`의 목록의 부모 컴포넌트입니다.

Todo에 들어갈 데이터 배열 상태를 여기서 관리할 예정입니다.

<br />

# 개발 프로세스

## 1. 디자인에 맞춰 컴포넌트 개발

```tsx
// component/todo/todo.stories.tsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Todo from ".";

export default {
  title: "component/Todo",
  component: Todo,
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = {};
```

`Todo` 컴포넌트를 개발하기 위해 스토리 파일을 생성해줍니다.

react-app에서 매번 일일이 import하여 눈으로 확인하고 State를 체크할 것이 아니라

스토리북 환경에서 간편하게 UI를 개발할 수 있습니다.

![TODO](./docs/todo2.png)

첫 스토리를 작성했습니다! 이제 구현해야될 상태들을 작성해봅시다!

<br />

## 2. 테스트 케이스 작성

![TODO](./docs/todo3.gif)

스토리북에서는 테스트 케이스를 스토리라고 합니다.

스토리는 컴포넌트의 특정 상태, 즉 브라우저에서 실제 렌더링된 상태를 포착합니다.

현재 `Todo` 컴포넌트에는 이렇게 총 세 가지 상태가 있습니다.

- 기본 상태
- 고정 되었을 때
- 완료하였을 때

이 각 상태에 대한 스토리를 추가해봅시다.

<br />

## 3. 검증하기

검증은 컴포넌트가 스토리북에서 어떻게 보이는지 개발자가 직접 평가하는 과정입니다.

즉, 디자인 명세와 일치하는지 확인하는 일입니다.

```tsx
// todo.stories.tsx
...

const mock: TodoData = {
	id: 0,
	title: "TODO",
	state: "NONE",
};

...

const longTextString =
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla libero accusamus magni harum optio eligendi, architecto iste vitae nesciunt officiis ea numquam possimus, debitis atque quidem corrupti, incidunt explicabo fugiat?";

export const LongText = Template.bind({});
LongText.args = {
	todo: {
		...mock,
		title: longTextString,
	},
};
```

스토리를 작성하다 보면 그 이전에는 미처 고려하지 못했던 시나리오도 떠오릅니다.

예를 들어 사용자가 정말 긴 내용의 Todo를 입력하면 어떻게 될까요?

이런 예외케이스 또한 스토리를 추가해 검증할 수 있습니다.

![TODO](./docs/todo4.png)

예상치 못하게 스타일이 깨진 것을 PR을 올리기 전에 확인했고 리뷰어 또한 눈으로 바로 확인가능합니다!

<br />

## 4. 자동으로 회귀 포착하기

일단 예상대로 만들어졌습니다. 하지만 앞으로도 `CSS`가 깨지지 않도록 하려면 어떻게 해야 될까요?

매번 수동으로 눈으로 확인하기보다 시각적 회귀 테스트 도구를 사용하여 회귀를 자동으로 확인하는 방법을 사용해보겟습니다.

스토리북에서 만든 `chromatic`을 사용해보겠습니다.

https://www.chromatic.com/docs/setup

![TODO](./docs/todo7.png)

이제 로그인 후 프로젝트를 생성합니다. 크로마틱은 스토리북용으로 특별히 제작되었으며 따로 구성이 없습니다.

아래 커맨드를 실행해 크로마틱이 각 스토리의 스냅샷을 캡처하게 해봅시다.

```bash
yarn add -D chromatic

npx chromatic --project-token=[Token]
```

![TODO](./docs/todo6.png)

![TODO](./docs/todo5.png)

한번 잘 작동하는지 확인해보겠습니다.

```tsx
<TodoCheckbox onClick={onArchiveTodo}>
  <FaCheck size={20} />
</TodoCheckbox>
```

아이콘의 사이즈를 아주 약간 수정하고 커밑하려고 합니다. 이제 크로마틱에서 어떤 식으로 보여주는지 확인해봅시다.

![TODO](./docs/todo8.png)

크로마틱 웹에서는 컴포넌트가 바뀌었다는 메세지가 왔습니다.

![TODO](./docs/todo8-1.png)

스토리들을 리뷰할 수 있는 UI가 나옵니다. 마치 깃허브의 PR처럼 팀으로도 사용가능하며

해당 리뷰어들의 Approve가 있어야만 Merge되도록 하는 것도 가능합니다.

![TODO](./docs/todo8.gif)

저희가 수정한 파일이 비주얼적으로 어떻게 바뀌었으며 코드 또한 같이 올라옵니다.
