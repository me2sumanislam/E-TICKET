
1.What is JSX, and why is it used?
JSX হলো এমন একটা মধ্যম যেখানে আমরা JavaScript কোডের ভেতরেই সরাসরি HTML লিখতে পারি
2.What is the difference between State and Props?
Props ওপরের কোনো কম্পোনেন্ট থেকে আসে এবং এটি পরিবর্তন করা যায় না .
কম্পোনেন্টের ভেতরের নিজস্ব তথ্য যা সময়ে সময়ে পরিবর্তন হতে পারে 

3.What is the useState hook, and how does it work?
একটা Counter আছে । বাটনে ক্লিক করবেন, রিঅ্যাক্টকে মনে রাখতে হবে আগের সংখ্যা কত ছিল 
const [count, setCount] = useState(0);
এখানে count হলো সংখ্যাটি, আর setCount দিয়ে আপনি সংখ্যাটি পরিবর্তন করবেন।
4.How can you share state between components in React?
Props হিসেবে পাঠিয়ে
5.How is event handling done in React?
HTML-এ লেখা হয় onclick সব ছোট হাতের .রিঅ্যাক্টে লিখতে হয় onClick (C বড় হাতের বা CamelCase দিতে হয়



# React + Vite





This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
