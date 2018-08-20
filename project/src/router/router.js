import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
Vue.use(Router)

export default new Router({
    mode: 'history',
	routes: [
				{
			path: '/',
			component: IndexPage
		},
//		{
//			path: '/orderList',
//			component: OrderListPage
//		},
//		{
//			path: '/detail',
//			component: DetailPage,
//			redirect: '/detail/analysis',
//			children: [
//				{
//					path: 'analysis',
//					component: DetailAnaPage
//				},
//				{
//					path: 'count',
//					component: DetailCouPage
//				},
//				{
//					path: 'forecast',
//					component: DetailForPage
//				},
//				{
//					path: 'publish',
//					component: DetailPubPage
//				}
//			]
//		}
	]
})
