# BladeMail
InboxWizard | EmailProTemplates | Continually Updated

📩 **Blademail – Professional Email Templates**  
EmailProTemplates | InboxWizard

🚀 **About the Project**  
Blademail is a collection of professionally designed HTML and React email templates built for high deliverability, responsiveness, and cross-client compatibility. Whether you're sending marketing campaigns, transactional emails, or custom newsletters, these templates ensure pixel-perfect rendering across all devices.

🎯 **Features**  
✅ **Responsive & Mobile-Friendly** – Works seamlessly on all screen sizes  
✅ **Cross-Client Compatibility** – Tested on Gmail, Outlook, Apple Mail, and more  
✅ **Customizable** – Easily adapt styles and content to your needs  
✅ **React Email Support** – Includes React-based templates using react-email  
✅ **Tailwind CSS Integration** – Leverages utility-first styling for scalable design  
✅ **Dark Mode Optimization** – Ensures a great experience in dark mode clients

📂 **Project Structure**  
Blademail/  
│── **emails/**  
│   ├── basic-template.html   # Simple HTML email  
│   ├── newsletter.html       # Newsletter template  
│   ├── transactional.html    # Transactional email template  
│   ├── marketing.html        # Promotional email  
│   ├── event-invite.html     # Event Invitation Email  
│   ├── portfolio-showcase.html # Portfolio Showcase Email  
│   ├── product-launch.html   # Product Launch Email  
│   ├── product-launch-2.html # Product Launch Email 2  
│   ├── product-launch-3.html # Product Launch Email 3  
│   ├── business-announcement.html # Professional Business Announcement Email  
│   ├── promo_email.html      # Promotional Email  
│   ├── promotional-offer.html # Promotional Offer  
│   ├── simple-email.html     # Simple Email Template  

│── **react-emails/**  
│   ├── OrderConfirmPro.js     # Order Confirmation Email  
│   ├── MultiNotify.js         # All-in-One Notification Email  
│   ├── AudioMail.js           # Audio Story Email  
│   ├── WelcomeEmail.js        # Personalized Onboarding Email  
│   ├── ReceiptEmail.js        # Transactional Receipt Email  
│   ├── EventInvite.js         # Event Invitation Email  

│── **assets/**               # Images and branding elements  
│── **README.md**             # This documentation file  
│── **LICENSE**               # License file (MIT by default)  

---

📧 **Templates**

✉️ **HTML Email Templates**  
📌 **Basic Template** – A simple, clean layout for general emails  
📌 **Newsletter** – A well-structured email for content distribution  
📌 **Transactional Email** – Automated emails for purchases, confirmations, etc.  
📌 **Marketing Email** – Designed for promotions and campaigns  
📌 **Event Invitation Email** – A beautifully designed invitation email  
📌 **Portfolio Showcase Email** – Showcase work and achievements  
📌 **Product Launch Email** – Announcing new products or features  
📌 **Professional Business Announcement** – Formal business updates  
📌 **Promotional Email** – Advertise products, sales, or services  
📌 **Promotional Offer** – Special offers or discounts  
📌 **Simple Email Template** – A minimalistic email design  

⚛️ **React Email Templates**  
📌 **Order Confirmation Email** – Confirmation details for purchases  
📌 **Multi-Notification Email** – Handles multiple notifications in one email  
📌 **Audio Story Email** – Designed for audio content delivery  
📌 **Welcome Email** – A personalized onboarding experience  
📌 **Receipt Email** – Transactional receipt for purchases  
📌 **Event Invitation Email** – A modern event invite layout  

---

🎯 Future Goals
Improve accessibility features.
Add more Email Templates, 

🛠️ **How to Use**

🔹 **Using HTML Templates**  
Simply copy the HTML file and customize it with your branding. You can test rendering using services like Litmus or Email on Acid.  

🔹 **Using React Email Templates**  
Install dependencies:  
```bash  
npm install @react-email/components @react-email/render  
Use the templates in your React project:

import { render } from "@react-email/render";  
import OrderConfirmPro from "./react-emails/OrderConfirmPro";  

const emailHtml = render(<OrderConfirmPro />);  
console.log(emailHtml);  


  
🔗 Connect & Contribute
If you’d like to suggest improvements or contribute, feel free to open an issue or submit a pull request.

🚀 Follow my journey on TikTok & GitHub for more email development insights!
