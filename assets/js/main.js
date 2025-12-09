// --- Gemini API Integration ---
async function analyzeProjectWithAI() {
  const input = document.getElementById('ai-project-desc').value;
  const resultBox = document.getElementById('ai-result');
  const resultContent = document.getElementById('ai-result-content');
  const btn = document.getElementById('ai-btn');
  
  if (!input || input.trim() === "") {
    alert("الرجاء إدخال وصف للمشروع أولاً / Please enter a project description first");
    return;
  }

  // UI Loading State
  const originalBtnText = btn.innerHTML;
  btn.innerHTML = '<span>Processing...</span> <i class="fas fa-spinner fa-spin"></i>';
  btn.disabled = true;
  resultBox.style.display = 'none';

  const apiKey = ""; // API key will be provided by environment
  const prompt = `As a professional digital marketing expert, analyze the following project and suggest 3 strategic, innovative, and actionable marketing tips. 
  Project Description: "${input}"
  
  Please provide the answer as concise and clear bullet points. If the input is Arabic, reply in Arabic. If English, reply in English.`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (text) {
        resultContent.innerHTML = text.replace(/\n/g, '<br>').replace(/\*/g, '');
        resultBox.style.display = 'block';
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        throw new Error("No text returned");
    }

  } catch (error) {
    console.error("AI Error:", error);
    alert("عذراً، حدث خطأ أثناء الاتصال بالمستشار الذكي / Error connecting to AI consultant");
  } finally {
    // Reset Button
    btn.innerHTML = originalBtnText;
    btn.disabled = false;
  }
}

// --- Simple Contact Form Handling (Home Page) ---
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const btn = event.target.querySelector('button[type="submit"]');
  const originalText = btn.innerText;
  
  btn.innerText = 'جاري الإرسال... ⏳';
  btn.disabled = true;
  btn.style.opacity = '0.7';

  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      service: document.getElementById('service').value,
      message: document.getElementById('message').value || 'لا يوجد تفاصيل إضافية',
      date: new Date().toLocaleDateString('ar-SA'),
      formType: 'Simple Home Request'
  };

  await sendData(formData, btn, originalText, 'تم الإرسال بنجاح ✅');
}

// --- Detailed Contact Form Handling (Contact Page - Arabic) ---
async function handleDetailedFormSubmit(event) {
  event.preventDefault(); 
  
  const btn = event.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  
  btn.innerHTML = 'جاري الإرسال... <i class="fas fa-spinner fa-spin"></i>';
  btn.disabled = true;
  btn.style.opacity = '0.7';

  const formData = {
      name: document.getElementById('name2').value,
      phone: document.getElementById('phone2').value,
      email: document.getElementById('email2').value,
      service: document.getElementById('service2').value,
      company: document.getElementById('company2').value || 'غير محدد',
      message: document.getElementById('message2').value,
      budget: document.getElementById('budget2').value || 'غير محدد',
      date: new Date().toLocaleDateString('ar-SA'),
      formType: 'Detailed Request (Arabic)' 
  };

  await sendData(formData, btn, originalText, 'تم الإرسال بنجاح <i class="fas fa-check"></i>');
}

// --- English Contact Form Handling ---
async function handleFormSubmitEN(event) {
  event.preventDefault(); 
  
  const btn = event.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  
  btn.innerText = 'Sending... ⏳';
  btn.disabled = true;
  btn.style.opacity = '0.7';

  const formData = {
      name: document.getElementById('nameEN').value,
      phone: document.getElementById('phoneEN').value,
      email: document.getElementById('emailEN').value,
      service: document.getElementById('serviceEN').value,
      company: document.getElementById('companyEN').value || 'Not specified',
      message: document.getElementById('messageEN').value,
      budget: document.getElementById('budgetEN').value || 'Not specified',
      date: new Date().toLocaleDateString('en-US'),
      language: 'English',
      formType: 'Detailed Request (English)'
  };

  await sendData(formData, btn, originalText, 'Sent Successfully <i class="fas fa-check"></i>');
}

// --- Generic Send Data Function ---
async function sendData(data, btn, originalText, successText) {
  try {
      const webhookUrl = "https://hook.eu1.make.com/m0r5843oyetl2f111beqnydz3yd3uust"; 

      const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
      });

      if (response.ok) {
          btn.innerHTML = successText;
          btn.style.backgroundColor = '#7EDDA3';
          btn.style.color = '#000';
          btn.style.border = 'none';
          
          // Find the form and reset it
          const form = btn.closest('form');
          if(form) form.reset();
          
          setTimeout(() => {
              btn.innerHTML = originalText;
              btn.disabled = false;
              btn.style.opacity = '1';
              btn.style.backgroundColor = ''; 
              btn.style.color = '';
              btn.style.border = '';
          }, 3000);
      } else {
          throw new Error('Server response not ok');
      }

  } catch (error) {
      console.error('Error:', error);
      btn.innerHTML = 'Error! ❌';
      btn.style.backgroundColor = '#ff6b6b';
      
      setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          btn.style.backgroundColor = '';
      }, 3000);
      
      alert("عذراً، حدث خطأ في الاتصال / Connection Error");
  }
}

// --- Portfolio Filtering Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'all' || category.includes(filterValue)) {
                        item.style.display = 'block';
                        item.style.animation = 'none';
                        item.offsetHeight; /* trigger reflow */
                        item.style.animation = 'fadeIn 0.5s ease-out';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- FAQ Accordion ---
    document.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        const wasActive = item.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        
        if (!wasActive) {
          item.classList.add('active');
        }
      });
    });

    // --- Smooth Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
});
