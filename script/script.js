const linkForm = document.getElementById('linkForm');
const linkList = document.getElementById('linkList');
const linkText = document.getElementById('linkText');
const linkURL = document.getElementById('linkURL');

// عرض قائمة فارغة عند بدء التشغيل
document.addEventListener('DOMContentLoaded', () => {
  linkList.innerHTML = ''; 
});

// add link
linkForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!linkText.value.trim() || !linkURL.value.trim()) {
    alert('Både länktext och URL måste anges!');
    return;
  }
  addLink(linkText.value, linkURL.value);
  linkText.value = '';
  linkURL.value = '';
});

// إضافة الرابط إلى القائمة
function addLink(text, url) {
  const li = document.createElement('li');
  li.innerHTML = `
    <a href="${url}" target="_blank">${text}</a>
    <div class="actions">
      <button onclick="removeLink(this)"><i class="fa fa-trash"></i></button>
      <button onclick="markLink(this)"><i class="fa fa-star"></i></button>
    </div>
  `;
  linkList.appendChild(li);
}

// حذف رابط
function removeLink(button) {
  button.closest('li').remove();
}

// تحديد رابط كمفضل
function markLink(button) {
  button.closest('li').classList.toggle('marked');
}