document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header Logic
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) { // Matches the height of the top-navbar
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    const tradeSidebar = document.getElementById('tradeSidebar');
    const tradeContentBox = document.getElementById('tradeContentBox');

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Dropdown Logic for Mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                    }
                });
            }
        });
    });

    // Back to Top Button Logic
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        // Show/hide button based on scroll using IntersectionObserver or simple scroll event
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        // Smooth scroll to top on click
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const tradesData = {
        concrete: {
            title: "Concrete <span>Estimating</span> Service",
            desc: "Concrete estimating services from Swift Takeoffs are crucial for accurately predicting the costs associated with concrete work, including materials, labor, and associated fees. Whether your project requires foundations, slabs, footings, or walls, Swift Takeoffs provides precise estimates to help you budget accurately, allocate resources effectively, and keep the project on track.",
            extra: "Concrete Estimating Services cover everything from calculating the volume of concrete needed to evaluating the costs of reinforcement materials, such as rebar and additives.",
            img: "assets/images/engineer-builder-woman-uniform-waistcoat-orange-protective-helmet-hold-business-layout-plan-paper-sitting-pavement.svg"
        },
        masonry: {
            title: "Masonry <span>Estimating</span> Service",
            desc: "Masonry estimating services from Swift Takeoffs are essential for accurately forecasting the costs associated with brick, block, stone, and other masonry work, including materials, labor, and related expenses. Whether your project involves exterior facades, retaining walls, structural blockwork, or decorative stone features, Swift Takeoffs delivers detailed and reliable estimates to help you plan efficiently, control costs, and ensure smooth project execution.",
            extra: "Masonry Estimating Services include precise quantity takeoffs for bricks, CMU blocks, mortar, reinforcement, and accessories, along with labor and equipment assessments. Our comprehensive approach ensures contractors can bid competitively while maintaining profitability and minimizing unforeseen expenses.",
            img: "assets/images/engineer-builder-woman-uniform-waistcoat-orange-protective-helmet-hold-business-layout-plan-paper-sitting-pavement.svg" // Placeholder if specific not available
        },
        plumbing: {
            title: "Plumbing <span>Estimating</span> Service",
            desc: "Plumbing estimating services from Swift Takeoffs are vital for accurately determining the costs associated with plumbing systems, including piping, fixtures, fittings, and installation labor. Whether your project requires water supply systems, drainage, vent piping, or specialty plumbing installations, Swift Takeoffs provides comprehensive estimates to support accurate budgeting and efficient project management.",
            extra: "Plumbing Estimating Services cover detailed takeoffs of pipes, valves, fixtures, insulation, and supports, as well as labor and equipment costs. Our precise calculations help contractors streamline procurement, avoid material shortages, and submit competitive, well-informed bids.",
            img: "assets/images/engineer-builder-woman-uniform-waistcoat-orange-protective-helmet-hold-business-layout-plan-paper-sitting-pavement.svg"
        },
        earthwork: {
            title: "Earthwork <span>Estimating</span> Service",
            desc: "Earthwork estimating services from Swift Takeoffs are crucial for calculating the costs associated with site preparation, excavation, grading, and soil stabilization. Whether your project involves land clearing, trenching, backfilling, or large-scale cut and fill operations, Swift Takeoffs offers accurate and dependable estimates to help you manage resources and maintain project timelines.",
            extra: "Earthwork Estimating Services include detailed quantity calculations for excavation volumes, hauling requirements, compaction needs, and equipment usage. Our thorough analysis enables contractors to plan efficiently, reduce risk, and optimize overall site development costs.",
            img: "assets/images/engineer-builder-woman-uniform-waistcoat-orange-protective-helmet-hold-business-layout-plan-paper-sitting-pavement.svg"
        },
        electrical: {
            title: "Electrical <span>Estimating</span> Service",
            desc: "Electrical estimating services from Swift Takeoffs are essential for forecasting the costs related to electrical systems, including wiring, conduits, panels, fixtures, and labor. Whether your project includes power distribution, lighting systems, low-voltage installations, or specialized electrical components, Swift Takeoffs ensures precise estimates that support accurate budgeting and successful project delivery.",
            extra: "Electrical Estimating Services cover detailed material takeoffs for cables, switchgear, panels, lighting fixtures, and devices, along with labor and installation costs. Our structured approach helps contractors improve bidding accuracy, manage procurement effectively, and maintain project profitability.",
            img: "assets/images/engineer-builder-woman-uniform-waistcoat-orange-protective-helmet-hold-business-layout-plan-paper-sitting-pavement.svg"
        },
        utilities: {
            title: "Utilities <span>Estimating</span> Service",
            desc: "Utilities estimating services from Swift Takeoffs are critical for determining the costs associated with underground and site utility systems, including water, sewer, gas, and storm drainage. Whether your project involves new installations, upgrades, or complex utility networks, Swift Takeoffs provides comprehensive estimates to help you plan strategically and control expenses.",
            extra: "Utilities Estimating Services include accurate quantity takeoffs for piping, manholes, fittings, and related infrastructure, as well as labor and equipment considerations. Our detailed evaluations assist contractors in reducing uncertainties and delivering competitive, well-structured bids.",
            img: "assets/images/engineer-builder-woman-uniform-waistcoat-orange-protective-helmet-hold-business-layout-plan-paper-sitting-pavement.svg"
        },
        specialties: {
            title: "Specialties <span>Estimating</span> Service",
            desc: "Specialties estimating services from Swift Takeoffs are important for accurately assessing the costs of specialty construction items such as signage, access panels, lockers, fire protection accessories, and miscellaneous architectural components. Whether your project includes unique installations or custom specialty items, Swift Takeoffs provides reliable estimates to ensure financial clarity and project efficiency.",
            extra: "Specialties Estimating Services involve detailed quantity takeoffs and cost analysis for all specified specialty components, along with associated labor and installation expenses. Our careful review of project documents ensures no detail is overlooked, helping contractors submit precise and confident bids.",
            img: "assets/images/engineer-builder-woman-uniform-waistcoat-orange-protective-helmet-hold-business-layout-plan-paper-sitting-pavement.svg"
        },
        painting: {
            title: "Painting <span>Estimating</span> Service",
            desc: "Painting estimating services from Swift Takeoffs are essential for calculating the costs associated with surface preparation, coatings, finishes, and labor. Whether your project includes interior walls, exterior facades, industrial coatings, or specialty finishes, Swift Takeoffs delivers accurate estimates to help you manage budgets and achieve high-quality results.",
            extra: "Painting Estimating Services cover detailed measurements of surface areas, material requirements such as primers and paints, and labor costs for application and finishing. Our methodical approach enables contractors to minimize waste, improve planning accuracy, and submit competitive bids with confidence.",
            img: "assets/images/engineer-builder-woman-uniform-waistcoat-orange-protective-helmet-hold-business-layout-plan-paper-sitting-pavement.svg"
        }
    };

    if (tradeSidebar && tradeContentBox) {
        const tradeItems = tradeSidebar.querySelectorAll('.trade-item');
        const contentTitle = tradeContentBox.querySelector('h3');
        const contentDesc = tradeContentBox.querySelectorAll('p')[0];
        const contentExtra = tradeContentBox.querySelectorAll('p')[1];
        const contentImg = tradeContentBox.querySelector('.trade-image img');

        tradeItems.forEach(item => {
            item.addEventListener('click', function() {
                const tradeKey = this.getAttribute('data-trade');
                const data = tradesData[tradeKey];

                if (data) {
                    // Update Active Class
                    tradeItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');

                    // Animation
                    tradeContentBox.style.opacity = '0';
                    
                    setTimeout(() => {
                        contentTitle.innerHTML = data.title;
                        contentDesc.textContent = data.desc;
                        contentExtra.innerHTML = `${data.extra} <a href="#" class="view-more">View More</a>`;
                        contentImg.src = data.img;
                        contentImg.alt = data.title.replace('<span>', '').replace('</span>', '');
                        
                        tradeContentBox.style.opacity = '1';
                        tradeContentBox.classList.add('fade-in');
                    }, 300);
                }
            });
        });
    }

    // FAQ Accordion
    const faqAccordion = document.getElementById('faqAccordion');
    if (faqAccordion) {
        const faqItems = faqAccordion.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(i => i.classList.remove('active'));
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
    // Testimonial Slider
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const dots = document.querySelectorAll('.testimonials-about .dot');
    
    if (track && prevBtn && nextBtn) {
        const cards = track.children;
        let currentIndex = 0;
        const totalCards = cards.length;

        function updateSlider(index) {
            const cardWidth = cards[0].offsetWidth + 20; // width + gap
            const maxIndex = totalCards - (window.innerWidth > 1200 ? 3 : window.innerWidth > 768 ? 2 : 1);
            
            // Boundary checks
            if (index < 0) index = 0;
            if (index > maxIndex) index = maxIndex;
            
            currentIndex = index;
            const offset = -currentIndex * cardWidth;
            track.style.transform = `translateX(${offset}px)`;

            // Update Dots (simplified for now - highlighting closest dot)
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === Math.round(currentIndex / (totalCards/dots.length)));
            });
        }

        nextBtn.addEventListener('click', () => {
            const visibleCards = window.innerWidth > 1200 ? 3 : window.innerWidth > 768 ? 2 : 1;
            if (currentIndex < totalCards - visibleCards) {
                updateSlider(currentIndex + 1);
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                updateSlider(currentIndex - 1);
            }
        });

        // Initialize/Resize handling
        window.addEventListener('resize', () => updateSlider(currentIndex));
        
        // Dot clicks
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                const targetIndex = Math.floor(i * (totalCards / dots.length));
                updateSlider(targetIndex);
            });
        });
    }
});
