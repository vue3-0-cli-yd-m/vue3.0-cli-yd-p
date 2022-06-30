import type { Router } from 'vue-router';
/*
  Permission
*/

function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, _, next) => {
    if (to.path === '/login') return next();
    const token = youngDanStorage.get('TOKEN');
    if (!token) return next('/login');
    return next();
  });
}

export default function setupRouterGuard(router: Router): void {
  createPermissionGuard(router);
}
