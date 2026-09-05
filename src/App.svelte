<script lang="ts">
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    const socialMedia = [
        { icon: "fa:youtube", url: "https://www.youtube.com/@AmabileBrass" },
        { icon: "fa:instagram", url: "https://www.instagram.com/amabile.brass" }
    ];

    const upcomingConcerts = [
        {
            title: { de: "Une histoire de france - Konzert mit der Bläserphilharmonie Rhein-Main", en: "Une histoire de france - Concert with Wind Philharmonic Rhein-Main" },
            location: { de: "Congress Park Hanau", en: "Congress Park Hanau" },
            date: "27.9.2026",
            time: "16:00",
            ticketUrl: "https://bprm.info/"
        },
        {
            title: { de: "Weihnachtskonzert", en: "Christmas Concert" },
            location: { de: "Dreifaltigkeitskirche Freiburg", en: "Trinity Church Freiburg" },
            date: "5.12.2026",
            time: "16:00 - 17:30",
            ticketUrl: ""
        },
        {
            title: { de: "Weihnachtskonzert", en: "Christmas Concert" },
            location: { de: "St. Petrus Canisius Kirche Freiburg", en: "St. Petrus Canisius Church Freiburg" },
            date: "5.12.2026",
            time: "19:30 - 21:00",
            ticketUrl: ""
        },
        {
            title: { de: "Reihe Forum Komposition 13", en: "Forum Composition Series 13" },
            location: { de: "Palais Bellevue, Kassel", en: "Palais Bellevue, Kassel" },
            date: "21.11.2026",
            time: "20:00 - 21:30",
            ticketUrl: ""
        }
    ];

    type Language = 'de' | 'en';
    let lang = $state<Language>(typeof navigator !== 'undefined' && navigator.language.startsWith('en') ? 'en' : 'de');

    $effect(() => {
        const currentLang = lang; // trigger effect on language change
        
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });

        document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
        
        return () => observer.disconnect();
    });

    const scrollDown = () => {
        const bioSection = document.getElementById('biography');
        if (bioSection) {
            bioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const translations = {
        de: {
            subtitle: "Blechbläserquartett",
            navStart: "Start",
            biographyTitle: "Biografie",
            biographyText: [
                "Amabile Brass ist ein 2025 neu gegründetes Ensemble, das mit seinem lieblichen, virtuosen und zugleich aufregenden kammermusikalischen Zusammenspiel Räume zum Klingen bringt. Die Besetzung aus tiefen, konisch geformten Blechblasinstrumenten bildet die Grundlage für einen außergewöhnlich homogenen Klangkörper, der mit seinen Farben und der Wärme an eine Orgel oder einen Chor erinnert.",
                "Ein zentrales Anliegen des Ensembles ist es, die oft unterschätzten und mit Klischees behafteten Instrumente Althorn (Anabel Voigt), Euphonium (Nathan Zumbusch und Klemens Vetter) und Tuba (Lara Schomann) auf eine klassische und unterhaltsame Weise einem breiten Publikum näherzubringen. Durch die wachsende Präsenz dieser Instrumente in Brass Bands und professionellen Blasorchestern gewinnen sie zunehmend an Popularität und finden auch in Deutschland ihren Platz an Musikhochschulen und in der professionellen Musikszene.",
                "Die Mitglieder von Amabile Brass sind zwischen 20 und 32 Jahren alt und in vielfältigen Bereichen tätig - von der freischaffenden künstlerischen Arbeit über die Hochschullehre bis hin zur Musikphysiologie und Musikpsychologie. Gemeinsam vereinen sie die Leidenschaft, die Ausdruckskraft der tiefen Blechblasinstrumente in all ihren Facetten erlebbar zu machen."
            ],
            concertsTitle: "Konzerte",
            upcoming: "Demnächst",
            tickets: "Tickets",
            moreDates: "Weitere Termine werden bald bekannt gegeben.",
            contactTitle: "Kontakt",
            contactDesc: "Haben Sie Interesse, uns für eine Veranstaltung zu buchen, oder möchten Sie einfach Hallo sagen? Wir würden uns freuen, von Ihnen zu hören!",
            followUs: "Folgen Sie uns",
            allRights: "Alle Rechte vorbehalten."
        },
        en: {
            subtitle: "Brass Quartet",
            navStart: "Start",
            biographyTitle: "Biography",
            biographyText: [
                "Since its founding in 2025, Amabile Brass has been bringing fresh energy to the German classical music scene. The young quartet consists of alto horn (Anabel Voigt), two euphoniums (Nathan Zumbusch and Klemens Vetter), and tuba (Lara Schomann), and captivates audiences with a lyrical, virtuosic, and at the same time exciting chamber music interplay.",
                "This instrumentation is unique in Germany: four low, conical brass instruments that together create an exceptionally homogeneous sound. With their wide range of colours and the warmth of their tone, they evoke associations with an organ or a choir, offering a listening experience rarely found in chamber music.",
                "With this approach, Amabile Brass aims to bring these instruments more into the spotlight and to reshape their perception, particularly within the German classical music scene. The ensemble has already reached an important milestone at the German Music Competition 2026, where it advanced to the semifinals in the category “Ensembles in Open Instrumentation.” At the same time, this marked the first-ever presentation of alto horn and euphonium at this prestigious competition.",
                "The members of Amabile Brass are active in a wide range of fields, from freelance artistic performance to university teaching and music education, as well as music physiology and music psychology. Together, they share a passion for exploring and conveying the expressive power of low brass instruments in all their facets - a goal they have already impressively achieved with their performances so far and their unique sound world."
            ],
            concertsTitle: "Concerts",
            upcoming: "Upcoming",
            tickets: "Tickets",
            moreDates: "More dates to be announced soon.",
            contactTitle: "Get in touch",
            contactDesc: "Interested in booking us for an event, or just want to say hello? We would love to hear from you.",
            followUs: "Follow Us",
            allRights: "All rights reserved."
        }
    };

    let t = $derived(translations[lang]);
</script>

<main class="w-full min-h-screen text-carbon-black-900 selection:bg-powder-blue-200 selection:text-carbon-black-900 relative">
    
    <!-- Language Toggle -->
    <div class="absolute top-4 right-4 md:top-6 md:right-8 z-50 flex space-x-4 font-sans text-sm font-medium tracking-widest uppercase">
        <button onclick={() => lang = 'de'} class="transition-colors duration-300 {lang === 'de' ? 'text-white' : 'text-white/50 hover:text-white/80'}">DE</button>
        <span class="text-white/30">|</span>
        <button onclick={() => lang = 'en'} class="transition-colors duration-300 {lang === 'en' ? 'text-white' : 'text-white/50 hover:text-white/80'}">EN</button>
    </div>

    <!-- HERO SECTION -->
    <section id="hero" class="relative w-full h-[65svh] md:h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-carbon-black-950">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img src="/img/pictures/amabile_colored_background_crop.jpg" alt="Amabile Brass" class="w-full h-full object-cover object-[50%_25%] opacity-100" />
            <!-- Radial gradient only behind the text so the edges remain untouched -->
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,transparent_70%)]"></div>
        </div>
        
        <!-- Header Content -->
        <div class="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-8 reveal">
            <h1 class="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white mb-6 [text-shadow:_0_10px_40px_rgb(0_0_0_/_80%),_0_2px_15px_rgb(0_0_0_/_70%),_0_0px_5px_rgb(0_0_0_/_60%)]">
                Amabile Brass
            </h1>
            <p class="font-sans text-sm sm:text-lg md:text-xl font-medium text-white tracking-[0.4em] uppercase [text-shadow:_0_4px_15px_rgb(0_0_0_/_100%),_0_1px_4px_rgb(0_0_0_/_100%),_0_0px_2px_rgb(0_0_0_/_100%)]">
                {t.subtitle}
            </p>
        </div>

        <!-- Scroll Down Icon -->
        <button onclick={scrollDown} class="absolute bottom-12 z-20 text-white hover:scale-110 animate-bounce cursor-pointer p-4 focus:outline-none reveal reveal-delay-1 [filter:_drop-shadow(0_4px_10px_rgba(0,0,0,0.5))]">
            <Icon icon="mdi:chevron-down" width="3.5rem" height="3.5rem" />
        </button>
    </section>

    <!-- BIOGRAPHY SECTION -->
    <section id="biography" class="pt-24 pb-6 md:pt-36 md:pb-20 px-8 md:px-24 bg-pale-oak-50">
        <div class="max-w-3xl mx-auto flex flex-col items-center text-center">
            <h2 class="font-serif text-4xl md:text-6xl mb-14 text-carbon-black-800 reveal">{t.biographyTitle}</h2>
            <div class="font-sans text-lg md:text-xl font-light leading-relaxed text-carbon-black-700 space-y-8">
                {#each t.biographyText as paragraph, i}
                    <p class="reveal" style="transition-delay: {i * 100}ms">{paragraph}</p>
                {/each}
            </div>
        </div>
    </section>

    <!-- CONCERT DATES SECTION -->
    <section id="concerts" class="py-24 md:py-36 px-8 md:px-24 bg-powder-blue-50">
        <div class="max-w-4xl mx-auto">
            <h2 class="font-serif text-4xl md:text-6xl mb-16 text-center text-carbon-black-800 reveal">{t.concertsTitle}</h2>
            <div class="flex flex-col space-y-6">
                {#each upcomingConcerts as concert, i}
                <div class="reveal group flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-10 bg-white border border-powder-blue-100 rounded-xl hover:shadow-xl hover:border-powder-blue-300 transition-all duration-300 gap-6" style="transition-delay: {i * 100}ms">
                    <div class="flex flex-col flex-1 w-full md:pr-8">
                        <span class="font-sans font-semibold text-powder-blue-600 text-xs tracking-[0.2em] uppercase mb-3 block">{t.upcoming}</span>
                        <h3 class="font-serif text-2xl md:text-3xl text-carbon-black-900 mb-3 group-hover:text-wine-plum-600 transition-colors leading-snug">{concert.title[lang]}</h3>
                        <p class="font-sans font-light text-carbon-black-500 flex items-start sm:items-center mt-auto text-sm md:text-base">
                            <Icon icon="mdi:map-marker-outline" class="mr-2 mt-0.5 sm:mt-0 shrink-0" width="1.2rem" height="1.2rem" /> 
                            <span>{concert.location[lang]}</span>
                        </p>
                    </div>
                    <div class="flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end w-full md:w-auto shrink-0 md:pl-10 md:border-l border-t md:border-t-0 border-powder-blue-100 pt-6 md:pt-0">
                        <div class="flex flex-col md:items-end">
                            <span class="font-sans text-xl md:text-2xl font-medium text-carbon-black-800">{concert.date}</span>
                            <span class="font-sans font-light text-carbon-black-500 md:mt-2 flex items-center">
                                <Icon icon="mdi:clock-outline" class="mr-2" /> {concert.time}
                            </span>
                        </div>
                        {#if concert.ticketUrl}
                        <a href={concert.ticketUrl} target="_blank" rel="noopener noreferrer" class="ml-4 md:ml-0 md:mt-6 px-6 py-2 border-2 border-wine-plum-800 text-wine-plum-800 hover:bg-wine-plum-800 hover:text-white rounded-full font-sans text-sm font-semibold tracking-wider uppercase transition-colors duration-300">
                            {t.tickets}
                        </a>
                        {/if}
                    </div>
                </div>
                {/each}
            </div>
            
            <div class="mt-16 text-center reveal">
                <p class="font-sans font-light text-carbon-black-500 italic">{t.moreDates}</p>
            </div>
        </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="py-24 md:py-36 px-8 md:px-24 bg-wine-plum-900 text-pale-oak-50">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
            <div class="flex flex-col max-w-lg reveal">
                <h2 class="font-serif text-4xl md:text-6xl mb-8 text-white">{t.contactTitle}</h2>
                <p class="font-sans font-light text-lg md:text-xl text-pale-oak-100 leading-relaxed mb-10 opacity-90">
                    {t.contactDesc}
                </p>
                <a href="mailto:info@amabilebrass.de" class="group inline-flex items-center space-x-4 font-sans text-xl md:text-2xl font-light hover:text-pale-oak-300 transition-colors">
                    <div class="p-4 bg-wine-plum-800 rounded-full group-hover:bg-wine-plum-700 transition-colors shadow-lg">
                        <Icon icon="mdi:email-outline" width="2rem" height="2rem" />
                    </div>
                    <span>info@amabilebrass.de</span>
                </a>
            </div>
            
            <div class="flex flex-col space-y-8 md:pl-20 md:border-l border-wine-plum-700 reveal reveal-delay-1">
                <h3 class="font-serif text-3xl text-white mb-2">{t.followUs}</h3>
                <div class="flex flex-row space-x-6">
                    {#each socialMedia as media}
                        <a href={media.url} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-16 h-16 rounded-full border border-wine-plum-700 bg-wine-plum-800 text-pale-oak-200 hover:bg-pale-oak-200 hover:text-wine-plum-900 hover:border-pale-oak-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <Icon icon={media.icon} width="1.8rem" height="1.8rem" />
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </section>
    
    <!-- FOOTER -->
    <footer class="py-12 bg-carbon-black-950 text-center text-carbon-black-400 font-sans text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Amabile Brass. {t.allRights}</p>
    </footer>
</main>