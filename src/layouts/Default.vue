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
  --background: #fffefa;
  --background-grey: #faf6eb;
  --text: #1c1a18;
  --text-grey: #675645;
  --text-white: #fffefa;
  --text-black: #1c1a18;
  font-size: 18px;
}
.container {
  margin: 0 auto;
  max-width: 50rem;
}
.separator {
  height: 0.5rem;
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
  border-radius: 2rem;
  display: inline-flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  text-decoration: none;
}
.icon-button:hover,
.icon-button:focus {
  border-color: var(--brand-dark);
}
.icon-button > span {
  display: block;
}
.icon-button > svg {
  height: 1.2rem;
  margin-left: 1rem;
}
* {
  outline: none;
}
a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}
a:hover,
a:focus {
  text-decoration: underline;
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
select:hover,
select:focus {
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
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
h3 {
  font-size: 1.15rem;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
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
  color: var(--brand-light);
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
    --background: #1d1810;
    --text: #fffefa;
    --text-grey: #ac957e;
  }
  select {
    background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9' /%3E%3C/svg%3E");
  }
}
</style>