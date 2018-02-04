<h3>这里有 {{ loops.length }} 个 xhr 请求，现已加载成功 <span id="success-xhr-count">0</span> 个</h3>
{% for i in loops %}
  <script>
    (function() {
      fetch('/image/{{loop.index}}').then(() => {
        const countDom = document.getElementById('success-xhr-count');
        let count = parseInt(countDom.innerText);
        count++;
        countDom.innerText = count;
      });
    })();
  </script>
{% endfor %}

<h3>这里有 {{ loops.length }} 份 JavaScript 脚本，现已加载成功 <span id="success-script-count">0</span> 份</h3>

{% for i in loops %}
  <script type="text/javascript" src="script/{{loop.index}}.js"></script>
{% endfor %}

<h3>这里有 {{ loops.length }} 图片，现已加载成功 <span id="success-image-count">0</span> 张</h3>
{% for i in loops%}
  <div class="image-container">
    <p>这是第 {{loop.index}} 张图片</p>
    <img src="/image/{{loop.index}}" style="max-width: 100%"/>
  </div>
{% endfor %}
<script>
  (function () {
    const countDom = document.getElementById('success-image-count');
    let count = parseInt(countDom.innerText);
    Array.from(document.querySelectorAll('img')).forEach(img => {
      img.addEventListener('load', evt => {
        count++;
        countDom.innerText = count;
      });
    });
  })();
  
</script>
