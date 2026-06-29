import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 禁用音乐播放器方法：
	// 模板默认侧边栏和导航栏两个都显示
	// 1. 侧边栏：在sidebarConfig.ts侧边栏配置把音乐组件enable设为false禁用即可
	// 2. 导航栏：在本配置文件把showInNavbar设为false禁用即可

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.6,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.mohua799.us.ci/playlist/track/all",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "18094308440",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "雨过后的风景",
				artist: "Dizzy Dizzo (蔡诗芸)",
				url: "/assets/music/Dizzy Dizzo (蔡诗芸) - 雨过后的风景.mp3",
				cover: "/assets/music/cover/142054139.jpg",
				lrc: "",
				
			},
					{
				name: "恋人",
				artist: "李荣浩",
				url: "/assets/music/李荣浩 - 恋人.mp3",
				cover: "/assets/music/cover/-124710455.jpg",
				lrc: "",
				
			},
					{
				name: "雨爱",
				artist: "杨丞琳",
				url: "/assets/music/杨丞琳 - 雨爱.mp3",
				cover: "/assets/music/cover/1257889409.jpg",
				lrc: "",
				
			},
					{
				name: "一样的月光",
				artist: "徐佳莹",
				url: "/assets/music/徐佳莹 - 一样的月光.mp3",
				cover: "/assets/music/cover/-1477128653.jpg",
				lrc: "",
				
			},
					{
				name: "演员",
				artist: "薛之谦",
				url: "/assets/music/薛之谦 - 演员.mp3",
				cover: "/assets/music/cover/-738683298.jpg",
				lrc: "",
				
			},
					{
				name: "失眠",
				artist: "Suki刘舒妤",
				url: "/assets/music/Suki刘舒妤 - 失眠.mp3",
				cover: "/assets/music/cover/-1207256882.jpg",
				lrc: "",
				
			},
					{
				name: "唯一",
				artist: "G.E.M.邓紫棋",
				url: "/assets/music/G.E.M.邓紫棋 - 唯一.mp3",
				cover: "/assets/music/cover/1807509476.jpg",
				lrc: "",
				
			},
					{
				name: "爱错(Live)",
				artist: "王力宏",
				url: "/assets/music/王力宏 - 爱错(Live).mp3",
				cover: "/assets/music/cover/459418227.jpg",
				lrc: "",
				
			},
					{
				name: "小半",
				artist: "陈粒",
				url: "/assets/music/陈粒 - 小半.mp3",
				cover: "/assets/music/cover/750979831.jpg",
				lrc: "",
				
			},
					{
				name: "我怀念的",
				artist: "孙燕姿",
				url: "/assets/music/孙燕姿 - 我怀念的.mp3",
				cover: "/assets/music/cover/-1358154024.jpg",
				lrc: "",
				
			},
					{
				name: "特别的人",
				artist: "方大同",
				url: "/assets/music/方大同 - 特别的人.mp3",
				cover: "/assets/music/cover/660469972.jpg",
				lrc: "",
				
			},
					{
				name: "离开我的依赖",
				artist: "王艳薇",
				url: "/assets/music/王艳薇 - 离开我的依赖.mp3",
				cover: "/assets/music/cover/-128027901.jpg",
				lrc: "",
				
			},
					{
				name: "其实",
				artist: "薛之谦",
				url: "/assets/music/薛之谦 - 其实.mp3",
				cover: "/assets/music/cover/375698682.jpg",
				lrc: "",
				
			},
					{
				name: "我们俩",
				artist: "郭顶",
				url: "/assets/music/郭顶 - 我们俩.mp3",
				cover: "/assets/music/cover/460297440.jpg",
				lrc: "",
				
			},
					{
				name: "海屿你",
				artist: "马也_Crabbit",
				url: "/assets/music/马也_Crabbit - 海屿你.mp3",
				cover: "/assets/music/cover/849771401.jpg",
				lrc: "",
				
			},
					{
				name: "Always Online",
				artist: "林俊杰",
				url: "/assets/music/林俊杰 - Always Online.mp3",
				cover: "/assets/music/cover/-591667829.jpg",
				lrc: "",
				
			},
					{
				name: "红色高跟鞋",
				artist: "蔡健雅",
				url: "/assets/music/蔡健雅 - 红色高跟鞋.mp3",
				cover: "/assets/music/cover/1209660682.jpg",
				lrc: "",
				
			},
					{
				name: "爱情讯息",
				artist: "郭静",
				url: "/assets/music/郭静 - 爱情讯息.mp3",
				cover: "/assets/music/cover/1898353582.jpg",
				lrc: "",
				
			},
					{
				name: "是我不够好",
				artist: "李毓芬",
				url: "/assets/music/李毓芬 - 是我不够好.mp3",
				cover: "/assets/music/cover/-523934864.jpg",
				lrc: "",
				
			},
					{
				name: "多远都要在一起",
				artist: "G.E.M.邓紫棋",
				url: "/assets/music/G.E.M.邓紫棋 - 多远都要在一起.mp3",
				cover: "/assets/music/cover/2060124021.jpg",
				lrc: "",
				
			},
					{
				name: "第57次取消发送",
				artist: "菲菲公主（陆绮菲)",
				url: "/assets/music/菲菲公主（陆绮菲） - 第57次取消发送.mp3",
				cover: "/assets/music/cover/1022320166.jpg",
				lrc: "",
				
			},
					{
				name: "瞬",
				artist: "郑润泽",
				url: "/assets/music/郑润泽 - 瞬.mp3",
				cover: "/assets/music/cover/-2049031594.jpg",
				lrc: "",
				
			},
					{
				name: "遇见",
				artist: "郑润泽",
				url: "/assets/music/郑润泽 - 遇见.mp3",
				cover: "/assets/music/cover/-645183021.jpg",
				lrc: "",
				
			},
					{
				name: "开始懂了",
				artist: "孙燕姿",
				url: "/assets/music/孙燕姿 - 开始懂了.mp3",
				cover: "/assets/music/cover/-509756528.jpg",
				lrc: "",
				
			},
					{
				name: "泡沫 (G.E.M.重生版)",
				artist: "G.E.M.邓紫棋",
				url: "/assets/music/G.E.M.邓紫棋 - 泡沫 (G.E.M.重生版).mp3",
				cover: "/assets/music/cover/1303219581.jpg",
				lrc: "",
				
			},
					{
				name: "你就不要想起我",
				artist: "田馥甄的小迷妹",
				url: "/assets/music/田馥甄的小迷妹 - 你就不要想起我.mp3",
				cover: "/assets/music/cover/2037734909.jpg",
				lrc: "",
				
			},
					{
				name: "偏爱",
				artist: "张芸京",
				url: "/assets/music/张芸京 - 偏爱.mp3",
				cover: "/assets/music/cover/-850010483.jpg",
				lrc: "",
				
			},
					{
				name: "至少还有你",
				artist: "林忆莲",
				url: "/assets/music/林忆莲 - 至少还有你.mp3",
				cover: "/assets/music/cover/2136053330.jpg",
				lrc: "",
				
			},
				{
				name: "月光下的星星",
				artist: "金海心",
				url: "/assets/music/金海心 - 阳光下的星星.mp3",
				cover: "/assets/music/cover/109951167193041941.jpg",
				lrc: "",
			},
			
		],
	},
};
