document.addEventListener('DOMContentLoaded', function () {
    // เพิ่ม Event Listener เพื่อซ่อน overlay เมื่อคลิกปุ่มปิด
    let closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            console.log('Close button clicked');
            let appInstallNotification = document.querySelector('.img-fluid');
            if (appInstallNotification) {
                appInstallNotification.style.display = 'none';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // หา element ของภาษาใน .topnav2
    const languageLink = document.querySelector('.topnav2 li:first-child a');
    // หา element ของลิงค์ SIGN IN ใน .topnav2
    const signInLink = document.querySelector('.topnav2 li:last-child a');
    // main-navbar
    const mainNav1 = document.querySelector('.collect-order h4');
    const mainNav2 = document.querySelector('.delivery-order h4');
    const mainNav3 = document.querySelector('.big-order h4');
    // row content box-a
    const pickupStore = document.querySelector('.pickup-store');
    const partyOrder = document.querySelector('.party-order');
    const orderButton = document.querySelectorAll('.order-button');
    // about-us 1-1 --> 3-1
    const ourFood = document.querySelector('.our-food');
    const about11 = document.querySelector('.about1-1');
    const about12 = document.querySelector('.about1-2');
    const kfcThailand = document.querySelector('.kfc-thailand');
    const about21 = document.querySelector('.about2-1');
    const about22 = document.querySelector('.about2-2');
    const about23 = document.querySelector('.about2-3');
    const stayInTouch = document.querySelector('.stay-in-touch');
    const about31 = document.querySelector('.about3-1');
    // footer copyright
    const privacyNotice = document.querySelector('.privacynotice');
    const termsOfUse = document.querySelector('.termsofuse');

    // สร้าง List สำหรับ desktop en path
    const desktopEnPaths = {
        slideshowContent: [
            'banner/desk-en/en-US_KFC_Free_Delivery_Banner.jpg',
            'banner/desk-en/en-US_Ruammitr.jpg',
            'banner/desk-en/en-US_ValueRice.jpg',
            'banner/desk-en/en-US_Chickenshare.jpg',
            'banner/desk-en/en-US_dvcolonueltuesday.jpg',
            'banner/desk-en/en-US_CATERING.jpg'
        ],
        rowContent: [
            'catagory/desk-en/en-US_tile-lg-1.jpg',
            'catagory/desk-en/en-US_tile-lg-2.jpg',
            'catagory/desk-en/en-US_BannerTender_home.jpg'
        ]
    };
    // สร้าง List สำหรับ moblie en path
    const mobileEnPaths = {
        slideshowContent: [
            'banner/mob-en/en-US_KFC_Free_Delivery_Banner.jpg',
            'banner/mob-en/en-US_Ruammitr.jpg',
            'banner/mob-en/en-US_ValueRice.jpg',
            'banner/mob-en/en-US_Chickenshare.jpg',
            'banner/mob-en/en-US_dvcolonueltuesday.jpg',
            'banner/mob-en/en-US_CATERING.jpg'
        ],
        rowContent: [
            'catagory/mob-en/en-US_tile-lg-1.jpg',
            'catagory/mob-en/en-US_tile-lg-2.jpg',
            'catagory/mob-en/en-US_BannerTender_home.jpg'
        ]
    };

    // สร้าง List สำหรับ desktop th path
    const desktopThaiPaths = {
        slideshowContent: [
            'banner/desk-th/th-TH_KFC_Free_Delivery_Banner.jpg',
            'banner/desk-th/th-TH_Ruammitr.jpg',
            'banner/desk-th/th-TH_ValueRice.jpg',
            'banner/desk-th/th-TH_Chickenshare.jpg',
            'banner/desk-th/th-TH_dvcolonueltuesday.jpg',
            'banner/desk-th/th-TH_CATERING.jpg'
        ],
        rowContent: [
            'catagory/desk-th/th-TH_tile-lg-1.jpg',
            'catagory/desk-th/th-TH_tile-lg-2.jpg',
            'catagory/desk-th/th-TH_BannerTender_home.jpg'
        ]
    };
    // สร้าง List สำหรับ moblie th path
    const mobileThaiPaths = {
        slideshowContent: [
            'banner/mob-th/th-Th_KFC_Free_Delivery_Banner.jpg',
            'banner/mob-th/th-Th_Ruammitr.jpg',
            'banner/mob-th/th-Th_ValueRice.jpg',
            'banner/mob-th/th-Th_Chickenshare.jpg',
            'banner/mob-th/th-Th_dvcolonueltuesday.jpg',
            'banner/mob-th/th-Th_CATERING.jpg'
        ],
        rowContent: [
            'catagory/mob-th/th-Th_tile-lg-1.jpg',
            'catagory/mob-th/th-Th_tile-lg-2.jpg',
            'catagory/mob-th/th-Th_BannerTender_home.jpg'
        ]
    };

    // เพิ่ม Event Listener สำหรับการคลิก
    languageLink.addEventListener('click', function (event) {
        event.preventDefault(); // ป้องกันการเปลี่ยนหน้า

        // ตรวจสอบภาษาปัจจุบัน
        const currentLanguage = languageLink.textContent;

        // เรียกใช้ฟังก์ชั่นเปลี่ยนภาษา
        toggleLanguage();

        // เรียกใช้ฟังก์ชันเปลี่ยน path ของรูปตามภาษา
        if (currentLanguage === 'EN') {
            changeImagePathEnglish();
        } else {
            changeImagePathThai();
        }
    });

    // ฟังก์ชั่นสำหรับการเปลี่ยนภาษา
    function toggleLanguage() {
        // ดึงข้อความปัจจุบัน
        const currentLanguage = languageLink.textContent;

        // ตรวจสอบและเปลี่ยนภาษา
        if (currentLanguage === 'EN') {
            languageLink.textContent = 'ไทย';
            signInLink.textContent = 'SIGN IN';
            changeToEnglish(); // เรียกใช้ฟังก์ชั่นเปลี่ยนเนื้อหาเป็นภาษาอังกฤษ
        } else {
            languageLink.textContent = 'EN';
            signInLink.textContent = 'เข้าสู่ระบบ';
            changeToThai(); // เรียกใช้ฟังก์ชั่นเปลี่ยนเนื้อหาเป็นภาษาไทย
        }
    }

    // ฟังก์ชั่นสำหรับการเปลี่ยนเนื้อหาเป็นภาษาอังกฤษ
    function changeToEnglish() {
        mainNav1.textContent = 'JUST PICK UP';
        mainNav2.textContent = 'DELIVERY';
        mainNav3.textContent = 'CATERING';
        
        pickupStore.textContent = 'JUST PICK UP AT STORE';
        partyOrder.textContent = 'ORDER PARTY SET MENU';
        // วนลูปผ่าน NodeList และเปลี่ยนข้อความของแต่ละ element
        orderButton.forEach(function (button) {
            button.textContent = 'CLICK NOW';
        });

        ourFood.textContent = 'Our Food';
        about11.textContent = 'Food safety policy';
        about12.textContent = 'Allergen information';
        kfcThailand.textContent = 'KFC Thailand';
        about21.textContent = 'About KFC';
        about22.textContent = 'FAQ';
        about23.textContent = 'Careers';
        stayInTouch.textContent = 'Stay in Touch';
        about31.textContent = 'Contact Us';
        privacyNotice.textContent = 'Privacy notice';
        termsOfUse.textContent = 'Terms Of Use';
        
        // ทำการเปลี่ยนเนื้อหาต่าง ๆ ในที่นี้ให้เป็นภาษาอังกฤษตามที่ต้องการ
        // ตัวอย่างเช่น:
        // document.querySelector('.some-element').textContent = 'English Text';
    }

    // ฟังก์ชั่นสำหรับการเปลี่ยนเนื้อหาเป็นภาษาไทย
    function changeToThai() {
        mainNav1.textContent = 'รับที่ร้าน/รถ';
        mainNav2.textContent = 'เดลิเวอรี่';
        mainNav3.textContent = 'เมนูจัดเลี้ยง';

        pickupStore.textContent = 'เลือกสั่งรับที่ร้าน';
        partyOrder.textContent = 'สั่งเมนูจัดเลี้ยง';
        // วนลูปผ่าน NodeList และเปลี่ยนข้อความของแต่ละ element
        orderButton.forEach(function (button) {
            button.textContent = 'สั่งเลย';
        });

        ourFood.textContent = 'อาหารของเรา';
        about11.textContent = 'มาตรฐานความปลอดภัยของอาหาร';
        about12.textContent = 'ข้อมูลสารก่อภูมิแพ้';
        kfcThailand.textContent = 'KFC ประเทศไทย';
        about21.textContent = 'เกี่ยวกับ KFC';
        about22.textContent = 'คำถามที่พบบ่อย';
        about23.textContent = 'ร่วมงานกับเรา';
        stayInTouch.textContent = 'ช่องทางในการติดต่อ';
        about31.textContent = 'ติดต่อเรา';
        privacyNotice.textContent = 'คำชี้แจงความเป็นส่วนตัว';
        termsOfUse.textContent = 'เงื่อนไขการใช้บริการ';

        // ทำการเปลี่ยนเนื้อหาต่าง ๆ ในที่นี้ให้เป็นภาษาไทยตามที่ต้องการ
        // ตัวอย่างเช่น:
        // document.querySelector('.some-element').textContent = 'ไทย';
    }

    // Function เปลี่ยน path ของรูปภาษาอังกฤษ
    function changeImagePathEnglish() {
        const slides = document.querySelectorAll('.slideshow .slide');
        const imageContainers = document.querySelectorAll('.row-content .image-container');

        // ถ้าหน้าจอมีความสูงสุดที่ 768px ให้เพิ่ม srcset
        const isMobileScreen = window.matchMedia('(max-width: 768px)').matches;

        // เปลี่ยน path ของรูปใน slideshow
        slides.forEach((slide, index) => {
            const picture = slide.querySelector('picture');
            const img = picture.querySelector('img');

            const imagePath = isMobileScreen ? mobileEnPaths.slideshowContent[index] : desktopEnPaths.slideshowContent[index];

            img.src = imagePath;

            // เพิ่ม srcset หากหน้าจอเป็น mobile
            if (isMobileScreen) {
                const source = picture.querySelector('source');
                source.srcset = imagePath;
            }
        });

        // เปลี่ยน path ของรูปใน image-container
        imageContainers.forEach((container, index) => {
            const picture = container.querySelector('picture');
            const img = picture.querySelector('img');

            const imagePath = isMobileScreen ? mobileEnPaths.rowContent[index] : desktopEnPaths.rowContent[index];

            img.src = imagePath;

            // เพิ่ม srcset หากหน้าจอเป็น mobile
            if (isMobileScreen) {
                const source = picture.querySelector('source');
                source.srcset = imagePath;
            }
        });
    }

    // Function เปลี่ยน path ของรูปภาษาไทย
    function changeImagePathThai() {
        const slides = document.querySelectorAll('.slideshow .slide');
        const imageContainers = document.querySelectorAll('.row-content .image-container');
    
        // ถ้าหน้าจอมีความสูงสุดที่ 768px ให้เพิ่ม srcset
        const isMobileScreen = window.matchMedia('(max-width: 768px)').matches;
    
        // เปลี่ยน path ของรูปใน slideshow
        slides.forEach((slide, index) => {
            const picture = slide.querySelector('picture');
            const img = picture.querySelector('img');
        
            const imagePath = isMobileScreen ? mobileThaiPaths.slideshowContent[index] : desktopThaiPaths.slideshowContent[index];
        
            img.src = imagePath;
        
            // เพิ่ม srcset หากหน้าจอเป็น mobile
            if (isMobileScreen) {
                const source = picture.querySelector('source');
                source.srcset = imagePath;
            }
        });
    
        // เปลี่ยน path ของรูปใน image-container
        imageContainers.forEach((container, index) => {
            const picture = container.querySelector('picture');
            const img = picture.querySelector('img');
        
            const imagePath = isMobileScreen ? mobileThaiPaths.rowContent[index] : desktopThaiPaths.rowContent[index];
        
            img.src = imagePath;
        
            // เพิ่ม srcset หากหน้าจอเป็น mobile
            if (isMobileScreen) {
                const source = picture.querySelector('source');
                source.srcset = imagePath;
            }
        });
    }
});


function manageSlides() {
    let slideIndex = 1;
    let slideInterval;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Bootstrap default = 5000
    function startSlideInterval() {
        slideInterval = setInterval(function () {
            plusSlides(1);
        }, 5000);
    }

    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1
        };
        if (n < 1) {
            slideIndex = slides.length
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        // Access img index 0
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += " active";
    }

    showSlides();
    startSlideInterval();

    let slideshowContainer = document.querySelector('.slideshow')

    slideshowContainer.addEventListener('mouseover', function () {
        stopSlideInterval();
    });

    slideshowContainer.addEventListener('mouseout', function () {
        startSlideInterval();
    });
}
// เรียกใช้ฟังก์ชัน
manageSlides();


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.header-toggle').forEach(function(header) {
        header.addEventListener('click', function() {
            let content = this.parentNode;
            let ul = content.querySelector('ul');
            let contactApp = content.querySelector('.contact-app');
            let redArrow = content.querySelector('.red-arrow');

            // ตรวจสอบขนาดหน้าจอ
            if (window.innerWidth <= 992) {
                // ถ้าขนาดน้อยกว่าหรือเท่ากับ 992px
                // ทำการแสดง/ซ่อน toggle
                if (ul) {
                    ul.style.display = (ul.style.display === 'none') ? 'block' : 'none';
                }

                if (contactApp) {
                    contactApp.style.display = (contactApp.style.display === 'none') ? 'flex' : 'none';
                }

                if (redArrow) {
                    redArrow.classList.toggle('rotated');
                }
            } else {
                // ถ้าขนาดมากกว่า 992px
                // ทำให้ toggle แสดงผลเสมอ
                if (ul) {
                    ul.style.display = 'block';
                }

                if (contactApp) {
                    contactApp.style.display = 'flex';
                }

                if (redArrow) {
                    redArrow.classList.add('rotated');
                }
            }
        });
    });
});