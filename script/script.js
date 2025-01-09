const linkForm = document.getElementById('linkForm');
const linkList = document.getElementById('linkList');
const linkText = document.getElementById('linkText');
const linkURL = document.getElementById('linkURL');

// عرض قائمة فارغة عند بدء التشغيل
document.addEventListener('DOMContentLoaded', () => {
  linkList.innerHTML = ''; 
});

// إضافة رابط جديد
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
  const listItem = button.closest('li');
  const starIcon = button.querySelector('i');

  // إذا كانت العنصر مفضلًا، قم بإلغاء التفضيل
  if (starIcon.classList.contains('favorited')) {
    starIcon.classList.remove('favorited');
  } else {
    // إذا لم يكن مفضلًا، اجعل العنصر مفضلًا
    starIcon.classList.add('favorited');
  }

  // إضافة أو إزالة فئة "marked" لتغيير تنسيق العنصر
  listItem.classList.toggle('marked');
}

// إضافة رابط Google كمثال عند التحميل
document.addEventListener('DOMContentLoaded', () => {
  addLink('Google', 'https://www.google.com');
});

document.addEventListener('DOMContentLoaded', () => {
  const linkList = document.getElementById('linkList');

  linkList.addEventListener('click', (event) => {
    if (event.target.classList.contains('favorite-btn') || event.target.closest('.favorite-btn')) {
      const listItem = event.target.closest('li');
      listItem.classList.toggle('favorite');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const linkList = document.getElementById('linkList');

  linkList.addEventListener('click', (event) => {
    if (event.target.classList.contains('star')) {
      event.target.classList.toggle('active');
    }
  });
});