# СЛОМ®

Концепт-лендинг вымышленного стритвир-бренда «СЛОМ®»: главный экран, дроп-коллекция,
лукбук, витрина товаров и манифест. Это дизайнерская работа, а не магазин — бренд, товары,
цены и отзывы придуманы, заказы не оформляются, данные пользователей нигде не собираются.

Автор: Денис Дьяков — [t.me/pline13](https://t.me/pline13), pealspline@gmail.com

## Стек

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3
- react-router

## Команды

```bash
npm install     # установка зависимостей
npm run dev     # дев-сервер на http://localhost:3000
npm run build   # продакшн-сборка (tsc -b && vite build)
npm run preview # локальный просмотр собранного проекта
npm run lint    # проверка ESLint
npm run images  # пересобрать PNG из public/img в WebP
```

Сборка кладётся в папку `dist/`.

## Картинки

Изображения хранятся в `public/img` в формате WebP. Если добавляете новые PNG —
положите их туда и запустите `npm run images`: скрипт `scripts/optimize-images.mjs`
сожмёт их в WebP (quality 82, максимум 2000px по ширине).
