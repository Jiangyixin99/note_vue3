import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Jiangyixin's Blog",
	subtitle: "",
	lang: "zh_CN", // 语言代码，例如：'en', 'zh_CN', 'ja'等
	themeColor: {
		hue: 155, // 主题颜色的默认色相，范围0-360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		fixed: false, // 对访客隐藏主题颜色选择器
	},
	banner: {
		enable: true,
		src: "https://jiangyixin.oss-cn-beijing.aliyuncs.com/assets/images/banner.png", // 相对于/src目录的路径。如果以'/'开头，则相对于/public目录
		position: "center", // 相当于object-position，只支持'top', 'center', 'bottom'。默认为'center'
		credit: {
			enable: false, // 显示横幅图片的 credits 文本
			text: "", // 要显示的 credits 文本
			url: "", // (可选) 指向原始 artwork 或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，范围1-3
	},
	favicon: [
		// 留空数组以使用默认 favicon
		// {
		//   src: '/favicon/icon.png',    // favicon 的路径，相对于 /public 目录
		//   theme: 'light',              // (可选) 'light' 或 'dark'，仅当您为明暗模式准备了不同的 favicon 时设置
		//   sizes: '32x32',              // (可选) favicon 的尺寸，仅当您有不同尺寸的 favicon 时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.FriendLink,
		{
			name: "GitHub",
			url: "https://github.com/Jiangyixin99", // 内部链接不应包含基础路径，因为会自动添加
			external: true, // 显示外部链接图标并在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://jiangyixin.oss-cn-beijing.aliyuncs.com/assets/images/qq_4.png", // 相对于/src目录的路径。如果以'/'开头，则相对于/public目录
	name: "Jiangyixin",
	bio: "Hello",
	links: [
		// {
		// 	name: "Twitter",
		// 	icon: "fa6-brands:twitter", // 访问 https://icones.js.org/ 获取图标代码
		// 	// 如果尚未包含相应的图标集，您需要安装
		// 	// `pnpm add @iconify-json/<图标集名称>`
		// 	url: "https://twitter.com",
		// },
		// {
		// 	name: "Steam",
		// 	icon: "fa6-brands:steam",
		// 	url: "https://store.steampowered.com",
		// },
		// {
		// 	name: "email",
		// 	icon: "fa6-regular:envelope",
		// 	url: "https://3278563096@qq.com",
		// },
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Jiangyixin99",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景颜色）被覆盖，请查看 astro.config.mjs 文件。
	// 请选择深色主题，因为此博客主题目前仅支持深色背景颜色
	theme: "github-dark",
};
