// DFS로 특정 노드를 방문하고 연결된 모든 노드들도 방문
function dfs(x, y) {
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  // 현재 노드를 아직 방문하지 않았다면
  if (graph[x][y] == 0) {
    // 해당 노드 방문 처리
    graph[x][y] = 1;
    // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  }
  return false;
}

// 2차원 리스트의 맵 정보
let n = 4;
let m = 5;
graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];
// 모든 노드(위치)에 대하여 음료수 채우기
result = 0;
for (let i = 0; i < n; i++)
  for (let j = 0; j < m; j++)
    // 현재 위치에서 DFS 수행
    if (dfs(i, j) == true) result++;
console.log(result); // 정답 출력
