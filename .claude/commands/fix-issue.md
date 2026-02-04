# Fix GitHub Issue

GitHub 이슈를 해결하고 PR을 생성합니다.

## 사용법
```
/fix-issue <이슈번호>
/fix-issue <이슈URL>
```

### 예시
```
/fix-issue 18
/fix-issue https://github.com/teca-official/teca-official-front/issues/18
```

## 입력
- 이슈 URL 또는 번호: $ARGUMENTS

## 작업 순서

1. 현재 브랜치가 `main`이 아니라면, 작업 중인 변경사항을 `git stash`로 임시 저장하고 원래 브랜치명을 기억합니다
2. `main` 브랜치로 checkout하고 최신 변경사항을 pull 받습니다
3. 이슈 내용을 확인합니다 (`gh issue view` 사용)
4. 이슈 내용에 맞는 새 브랜치를 생성합니다 (예: `fix/issue-설명` 또는 `feat/issue-설명`)
5. 이슈에서 요청한 변경사항을 구현합니다
6. 변경사항을 커밋합니다 (커밋 메시지에 `Closes #이슈번호` 포함)
7. 브랜치를 push하고 PR을 생성합니다
8. 1단계에서 stash한 내용이 있다면, 원래 브랜치로 돌아가서 `git stash pop`으로 복원합니다

## 주의사항
- PR 본문에 이슈 번호를 연결하여 자동으로 이슈가 닫히도록 합니다
- 커밋 메시지는 한글로 작성합니다
