import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "精准治疗药物知识库",
  description: "中国上市的精准治疗药物知识架构",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '药物列表', link: '/drugs/warfarin' },
      { text: '数据库资源', link: '/resources' }
    ],
    sidebar: {
      '/drugs/': [
        {
          text: '抗凝和抗血小板药物',
          items: [
            { text: '华法林 (Warfarin)', link: '/drugs/warfarin' },
            { text: '氯吡格雷 (Clopidogrel)', link: '/drugs/clopidogrel' }
          ]
        },
        {
          text: '抗癫痫药',
          items: [
            { text: '卡马西平 (Carbamazepine)', link: '/drugs/carbamazepine' },
            { text: '苯妥英 (Phenytoin)', link: '/drugs/phenytoin' }
          ]
        },
        {
          text: '抗抑郁药',
          items: [
            { text: '氟西汀 (Fluoxetine)', link: '/drugs/fluoxetine' },
            { text: '氟伏沙明 (Fluvoxamine)', link: '/drugs/fluvoxamine' }
          ]
        },
        {
          text: '质子泵抑制剂',
          items: [
            { text: '奥美拉唑 (Omeprazole)', link: '/drugs/omeprazole' }
          ]
        },
        {
          text: '降脂药',
          items: [
            { text: '阿托伐他汀 (Atorvastatin)', link: '/drugs/atorvastatin' }
          ]
        },
        {
          text: '抗肿瘤药',
          items: [
            { text: '氟尿嘧啶 (Fluorouracil)', link: '/drugs/fluorouracil' }
          ]
        },
        {
          text: '抗结核药',
          items: [
            { text: '异烟肼 (Isoniazid)', link: '/drugs/isoniazid' }
          ]
        },
        {
          text: '抗真菌药',
          items: [
            { text: '伏立康唑 (Voriconazole)', link: '/drugs/voriconazole' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 精准治疗知识库'
    }
  }
})
