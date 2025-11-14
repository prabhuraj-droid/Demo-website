const replayBtn = document.getElementById("replayBtn");
const codeBlock = document.getElementById("code-block");
const editorTitle = document.getElementById("editor-title");
console.log(`
 _   _      _ _        __        __         _     _ 
| | | | ___| | | ___   \\ \\      / /__  _ __| | __| |
| |_| |/ _ \\ | |/ _ \\   \\ \\ /\\ / / _ \\| '__| |/ _\` |
|  _  |  __/ | | (_) |   \\ V  V / (_) | |  | | (_| |
|_| |_|\\___|_|_|\\___/     \\_/\\_/ \\___/|_|  |_|\\__,_|

✨ Congratulations! You've found the Hello World Easter Egg! ✨
`);

const programs = [
  {
    lang: "Python",
    code: `<span class="color-0">print</span><span class="color-3">(</span><span class="color-2">'Hello, World!'</span><span class="color-3">)</span>`
  },
  {
    lang: "C",
    code: `<span class="color-0">#include</span> &lt;stdio.h&gt;\n<span class="color-0">int</span> main() {\n  printf(<span class="color-2">"Hello, World!"</span>);\n  <span class="color-0">return</span> 0;\n}`
  },
  {
    lang: "Java",
    code: `<span class="color-0">class</span> Hello {\n  <span class="color-0">public static void main</span>(String[] args) {\n    System.out.println(<span class="color-2">"Hello, World!"</span>);\n  }\n}`
  },
  {
    lang: "JavaScript",
    code: `<span class="color-0">console</span>.log(<span class="color-2">"Hello, World!"</span>);`
  },
  {
    lang: "C++",
    code: `<span class="color-0">#include</span> &lt;iostream&gt;\n<span class="color-0">using namespace std;</span>\n<span class="color-0">int</span> main() {\n  cout &lt;&lt; <span class="color-2">"Hello, World!"</span>;\n}`
  },
  {
    lang: "PHP",
    code: `<span class="color-0">&lt;?php</span>\necho <span class="color-2">"Hello, World!"</span>;\n<span class="color-0">?&gt;</span>`
  },
  {
    lang: "தமிழ் (Pseudo)",
    code: `<span class="color-0">வணக்கம்.உலகம்()</span>`
  }
];

let index = 0;

replayBtn.addEventListener("click", () => {
  index = (index + 1) % programs.length;
  editorTitle.textContent = programs[index].lang;
  codeBlock.innerHTML = programs[index].code;
});
