export default function ({ route, redirect }) {
    if (process.client) {
        // 클라이언트 사이드에서 실행되는 코드
        const refresh_token = sessionStorage.getItem('refresh_token');

        if (refresh_token !== null) {
            if (route.path === '/login' || route.path === '/signup') {
                return redirect('/'); // 로그인 페이지로 리디렉션
            }
        } else {
            if (route.path !== '/login' || route.path !== '/signup') {
                return redirect('/login');
            }
        }
    }
}
