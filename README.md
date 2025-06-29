# 📝 Ayan's Blog — Gatsby Markdown Blog

## 🚀 О проекте

Это мой персональный блог, созданный на основе **Gatsby**, с поддержкой:
- Постов в формате **Markdown**
- Динамической генерации страниц с помощью **GraphQL**
- Адаптивного и чистого интерфейса с **CSS Modules**
- Компонентной архитектуры на **React**

---

## ✨ Основные возможности

✅ Главная страница со списком постов:  
- Посты отображаются карточками  
- Поддержка сортировки: "Newest first" и "Oldest first"

✅ Страницы отдельных постов:
- Заголовок, дата, автор
- Контент Markdown

✅ Статическая генерация страниц:
- Используется `gatsby-node.js` для создания маршрутов по `frontmatter.url`

✅ Страница About Me:
- Фото автора (StaticImage)
- Информация о себе
- Кнопка возврата на главную

---

## 🛠 Используемые технологии

- **Gatsby** (статический генератор сайтов)
- **React** + JSX
- **GraphQL** (для получения данных)
- **Markdown** (контент для постов)
- **Gatsby Plugins**:
  - `gatsby-source-filesystem`
  - `gatsby-transformer-remark`
  - `gatsby-plugin-image`
  - `gatsby-plugin-sharp`
  - `gatsby-plugin-manifest`

- **CSS Modules** для стилизации

---

## 🔧 Как запустить

```bash
npm install
gatsby develop
