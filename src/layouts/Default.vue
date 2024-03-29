<template>
  <div>
    <navigation class="container" />
    <main class="container">
      <slot />
    </main>
    <my-footer class="container" />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
export default {
  components: {
    Navigation,
    MyFooter: Footer
  }
};
</script>

<style>
:root {
  --brand-light: #97907e;
  --brand-dark: #7a715d;
  --background: #fcfbf8;
  --background-grey: #f3f1e8;
  --text: #1f1a14;
  --text-grey: #796552;
  --text-white: #fcfbf8;
  --text-black: #1f1a14;
  font-size: 18px;
}
.container {
  margin: 0 auto;
  max-width: 50rem;
}
.separator {
  height: 0.3rem;
}
.separator#separator-1 {
  background: linear-gradient(
    25deg,
    var(--brand-dark) 0 40%,
    var(--brand-light) 40% 75%,
    var(--brand-dark) 75% 100%
  );
}
.separator#separator-2 {
  background: linear-gradient(
    155deg,
    var(--brand-dark) 0 20%,
    var(--brand-light) 20% 45%,
    var(--brand-dark) 45% 100%
  );
}
.separator#separator-3 {
  background: linear-gradient(
    95deg,
    var(--brand-dark) 0 60%,
    var(--brand-light) 60% 85%,
    var(--brand-dark) 85% 100%
  );
}
.columns {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.point {
  display: flex;
  margin: 1rem auto;
}
.point.single-line {
  align-items: center;
}
.point > svg,
.point > .icon {
  background: var(--brand-dark);
  border-radius: 50%;
  color: var(--text-white);
  flex-shrink: 0;
  height: 1.2rem;
  overflow: visible;
  padding: 0.75rem;
  text-align: center;
  width: 1.2rem;
}
.point > .icon {
  font-weight: 600;
  line-height: 1.2rem;
}
.point > span {
  margin-left: 1rem;
}
.icon-button {
  align-items: center;
  border: 2px solid var(--brand-light);
  border-radius: 2em;
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  justify-content: space-between;
  padding: 0.5em 1em;
  text-decoration: none;
}

.icon-button[disabled] {
  cursor: not-allowed;
}

.icon-button:hover:not([disabled]),
.icon-button:focus:not([disabled]) {
  border-color: var(--brand-dark);
  text-decoration: none;
}
.icon-button > span {
  display: block;
  text-decoration: none;
}
.icon-button > svg {
  height: 1.2rem;
  margin-left: 1rem;
  width: 1.2rem;
}
.icon-button > .g-image {
  height: 1.5rem;
  margin-left: 1rem;
  width: 1.5rem;
}

code {
  background: var(--background-grey);
  font-family: monospace;
  font-size: 0.9rem;
  padding: 0.2rem;
}

pre > code,
.code-block {
  background: var(--background-grey);
  border-left: 0.3rem solid var(--brand-light);
  display: block;
  font-size: 0.9rem;
  height: min-content;
  margin: 1rem auto;
  max-width: 100%;
  overflow-x: auto;
  padding: 0.5rem 1.5rem;
  white-space: pre;
}

* {
  outline: none;
}

a {
  color: inherit;
  cursor: pointer;
}

a:hover,
a:focus {
  color: var(--text-grey);
}

body {
  background-color: var(--background);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu,
    Roboto, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin: 0;
  padding: 0 1rem;
}
body::-webkit-scrollbar-track {
  background: var(--background);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--brand-light);
}
button {
  background: none;
  border: none;
}

section {
  margin-bottom: 1rem;
}
select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem top 50%;
  border: 2px solid var(--brand-light);
  border-radius: 2rem;
  color: var(--text);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 3rem 0.5rem 1rem;
}
select > * {
  background-color: var(--background);
}
select[disabled] {
  cursor: not-allowed;
}
select:hover:not([disabled]),
select:focus:not([disabled]) {
  border-color: var(--brand-dark);
}
h1,
h2,
h3 {
  font-weight: normal;
}
h1 {
  font-size: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
h2 {
  font-size: 1.5rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
h3 {
  font-size: 1.15rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
small {
  font-size: 0.9rem;
}
ul {
  list-style: disc;
  margin-bottom: auto;
  margin-left: -1rem;
}
ul > li:not(:last-child) {
  margin-bottom: 0.75rem;
}
::marker {
  color: var(--brand-dark);
  font-size: 1.25rem;
}
@media (min-width: 60rem) {
  body {
    padding: 0;
  }
  .columns {
    flex-direction: row;
  }
  .column {
    flex-basis: 47.5%;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --background: #181614;
    --background-grey: #332e2a;
    --text: #fcfbf8;
    --text-grey: #e0c8b2;
  }
  select {
    background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9' /%3E%3C/svg%3E");
  }
  ::marker {
    color: var(--brand-light);
  }
}
</style>