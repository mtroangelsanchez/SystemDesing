// ===== System Design Page - Interactive Script =====

document.addEventListener('DOMContentLoaded', () => {
    // Table of Contents - Active dot tracking
    const tocDots = document.querySelectorAll('.toc-dot');
    const sections = document.querySelectorAll('.content-block');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                tocDots.forEach(dot => dot.classList.remove('active'));
                const activeDot = document.querySelector(`.toc-dot[href="#${id}"]`);
                if (activeDot) activeDot.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.id) sectionObserver.observe(section);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 22, 40, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(10, 22, 40, 0.88)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Animate elements on scroll
    const animateOnScroll = document.querySelectorAll(
        '.info-card, .flow-step, .comparison-card, .scaling-card, ' +
        '.advantage-item, .consideration-card, .summary-item, .diagram-container'
    );

    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
                animObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateOnScroll.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animObserver.observe(el);
    });

    // Smooth scroll for nav links and toc dots
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // SVG diagram hover effects
    document.querySelectorAll('.svg-diagram svg').forEach(svg => {
        svg.style.transition = 'transform 0.3s ease';
        svg.addEventListener('mouseenter', () => {
            svg.style.transform = 'scale(1.02)';
        });
        svg.addEventListener('mouseleave', () => {
            svg.style.transform = 'scale(1)';
        });
    });

    // Active nav link tracking
    const navLinks = document.querySelectorAll('.nav-link');
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sections.forEach(section => {
        if (section.id) navObserver.observe(section);
    });

    // ===== CODE BLOCKS: Add copy button and wrapper =====
    document.querySelectorAll('.code-block').forEach(block => {
        // Skip if already wrapped
        if (block.parentElement.classList.contains('code-block-wrapper')) return;

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';

        // Detect language from content
        const content = block.textContent;
        let lang = 'código';
        if (content.includes('terraform') || content.includes('resource "aws')) lang = 'terraform (hcl)';
        else if (content.includes('docker-compose') || content.includes('services:')) lang = 'yaml';
        else if (content.includes('const ') || content.includes('require(')) lang = 'javascript';
        else if (content.includes('FROM ') || content.includes('WORKDIR')) lang = 'dockerfile';
        else if (content.includes('upstream') || content.includes('proxy_pass')) lang = 'nginx.conf';
        else if (content.includes('GET /') || content.includes('"id"')) lang = 'json';
        else if (content.includes('provider "') || content.includes('variable "')) lang = 'terraform (hcl)';
        else if (content.includes('#!/bin/bash') || content.includes('yum ')) lang = 'bash';

        // Create header
        const header = document.createElement('div');
        header.className = 'code-block-header';
        header.innerHTML = `
            <span class="code-block-lang">${lang}</span>
            <button class="code-copy-btn" title="Copiar código">
                <i class="fas fa-copy"></i> Copiar
            </button>
        `;

        // Insert wrapper
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(header);
        wrapper.appendChild(block);

        // Copy button functionality
        const copyBtn = header.querySelector('.code-copy-btn');
        copyBtn.addEventListener('click', async () => {
            // Get clean text content (without HTML tags)
            const textToCopy = block.textContent;
            try {
                await navigator.clipboard.writeText(textToCopy);
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copiado';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copiar';
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = textToCopy;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copiado';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copiar';
                    copyBtn.classList.remove('copied');
                }, 2000);
            }
        });
    });
});
