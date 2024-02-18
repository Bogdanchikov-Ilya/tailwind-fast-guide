<template>
  <div class="px-4">
    <!--  dark mode-->
    <p class="text-gray-900 font-bold text-2xl">Темная тема</p>
    <div class="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
      <div>
        <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><!-- ... --></svg>
        </span>
      </div>
      <h3 class="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">Writes Upside-Down</h3>
      <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</p>
    </div>
    <hr class="my-5 border-blue-700">
    <!--  media-->
    <p class="text-gray-900 font-bold text-2xl">Адапатив</p>
    <p class="text-red-600 sm:text-green-700 lg:text-blue-700">Адапатив</p>
    <hr class="my-5 border-blue-700">
<!--    hover-->
    <p class="text-gray-900 font-bold text-2xl">Hover</p>
    <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
      Save changes
    </button>
    <hr class="my-5 border-blue-700">
<!--    стилизвция вложенных списков-->
    <p class="text-gray-900 font-bold text-2xl">Стили списков</p>
    <ul class="marker:text-sky-400 list-disc">
      <li class="bg-gray-300 even:bg-purple-800" v-for="item of 10">--------{{item}}</li>
    </ul>
    <hr class="my-5 border-blue-700">
    <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
      <li>Sales</li>
      <li>Marketing</li>
      <li>SEO</li>
      <!-- ... -->
    </ul>
    <hr class="my-5 border-blue-700">
    <ul class="[&>li]:text-red-600">
      <li class="bg-gray-300" v-for="item of 10">--------{{item}}</li>
    </ul>
<!--    form-->
    <p class="text-gray-900 font-bold text-2xl">Состояния форм</p>
    <input type="text" class="focus:text-blue-700 border" value="1111">
    <button class="disabled:bg-gray-300" disabled>disabled-button</button>
    <hr class="my-5 border-blue-700">
<!--    стилизация на освнове родительского состояния-->
    <p class="text-gray-900 font-bold text-2xl">Cтили от родительского состояния</p>
    <button class="bg-purple-300 group/test p-3">
      <span>text1</span>
      <span class="group-hover/test:bg-blue-700">text2</span>
    </button>
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">nth-child</p>
<!--    nth-child-->
    <ul>
      <li v-for="item of 5" class="[&:nth-child(3)]:bg-red-200">--------{{item}}</li>
    </ul>
    <hr class="my-5 border-blue-700">
<!--    стилизация на основе однорангового состояни-->
    <p class="text-gray-900 font-bold text-2xl">Стилизация от соседнего состояни</p>
    <div>
      <input type="text" class="border peer">
      <span class="peer-focus:font-bold peer-focus:text-gray-500">1234</span>
    </div>
    <hr class="my-5 border-blue-700">
<!--    если завист от селекта-->
    <p class="text-gray-900 font-bold text-2xl">Стилизация от выбора (peer)</p>
    <div>
      <input id="draft" class="peer/draft" type="radio" name="status" checked />
      <label for="draft" class="peer-checked/draft:text-sky-500">Тест 1</label>

      <input id="published" class="peer/published" type="radio" name="status" />
      <label for="published" class="peer-checked/published:text-sky-500">Тест 2</label>

      <div class="hidden peer-checked/draft:block">текст Для первого</div>
      <div class="hidden peer-checked/published:block">текст Для второго</div>
    </div>
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">Стилизация на основе потомков</p>
    <label for="test" class="p-2 has-[:focus]:bg-blue-700">
      <input type="text" id="test" class="border-2">
    </label>
    <hr class="my-5 border-blue-700">
    <div class="group">
      <p class="group-has-[a]:bg-purple-800">234234234</p>
      <a href="#">Ссылка</a>
    </div>
<!--    Before After (не юзабельно)-->
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">Before After</p>
    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">Подсветка</p>
    <div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">
      <p>
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers
        a strange calm came over me. I don't know if it was divine intervention
        or the kinship of all living things but I tell you Jerry at that moment,
        I <em>was</em> a marine biologist.
      </p>
    </div>
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">Адаптиваня сетка</p>
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      <div v-for="item of 10" class="bg-red-700">Content</div>
    </div>
<!--    анимация (тоже не юзабельно)-->
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">Анимации</p>
    <div class="flex gap-3 *:bg-blue-700">
      <div class="animate-bounce">1111</div>
      <div class="animate-pulse">2222</div>
      <div class="animate-spin">3333</div>
    </div>
<!--    *Доступность*-->
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">*Доступность*</p>
<!--    эмуляция высокой контрасности в настройках браузера-->
    <p class="mt-2 opacity-30 contrast-more:opacity-100 text-slate-600 text-sm">
      эмуляция высокой контрасности в настройках браузера
    </p>
    <hr class="my-5 border-blue-700">
<!--    только для сринридера-->
    <span class="sr-only font-bold text-gray-900">SR-ONLY</span>
    <span class="font-bold text-gray-900">SR-Only</span>
<!--    для других глаз-->
    <label>
      <input type="radio" class="forced-colors:appearance-auto appearance-none" />
      <p class="forced-colors:block hidden">
        Cyan
      </p>
      <div class="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-200 ..."></div>
      <div class="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-500 ..."></div>
    </label>
    <!--    Положение экрана-->
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">*Положение экрана*</p>
    <div>
      <div class="portrait:hidden">
        portrait
      </div>
      <div class="landscape:hidden">
        <p>
          landscape
        </p>
      </div>
    </div>
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">Поддержка старых бразуеров</p>
    <div>
      <div class="flex supports-[display:grid]:grid">
        content
      </div>
    </div>
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">Зависимость от атрибута</p>
    <div data-size="large" class="data-[size=large]:text-blue-700">
      <!-- ... -->QWEQWEWQEWQ
    </div>
    <hr class="my-5 border-blue-700">
    <p class="text-gray-900 font-bold text-2xl">Выпадашка без JS (только в хроме работает)</p>
    <details class="open:bg-red-200 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
      <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
        Why do they call it Ovaltine?
      </summary>
      <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        <p>The mug is round. The jar is round. They should call it Roundtine.</p>
      </div>
    </details>
  </div>
</template>
<script lang="ts" setup>
// dark mode
// document.body.classList.add('dark')
</script>