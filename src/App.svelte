<script lang="ts">
    import Cover from "./lib/cover.svelte";
    import NavDesktop from "./lib/navigation/nav-desktop.svelte";
    import Icon from "@iconify/svelte";
    import NavMobile from "./lib/navigation/nav-mobile.svelte";

    import DraussenImGruenen from "../public/img/pictures/draussen.jpg";
    import AufDemSofa from "../public/img/pictures/sofa.jpg";

    let socialMedia = [
        [ "fa:youtube", "https://www.youtube.com/@AmabileBrass" ],
        [ "fa:instagram", "https://www.instagram.com/amabile.brass" ]
    ]

    let innerWidth = 0;
    let innerHeight = 0;
    $: onMobile = innerWidth < innerHeight;
    // $: console.log(innerWidth, innerHeight, innerWidth < innerHeight); 
    let repFilterVisible = false;
</script>




<svelte:window bind:innerWidth bind:innerHeight />
<main>
    <div class="fixed top-0 left-0 w-auto h-auto z-30">
        {#if onMobile}
            <NavMobile />
        {:else}
            <NavDesktop />
        {/if}
    </div>
    
    <Cover coverImage={DraussenImGruenen} onMobile={onMobile}></Cover>

    <!--
    <div class="relative w-full h-auto bg-theme-dim">
        <div id="biography" class="w-full h-auto flex flex-col sm:flex-row items-center justify-center pr-8 pl-8 ">
            <div class="mt-8 sm:mt-0 mb-6 sm:mb-0 h-auto p-4 sm:p-[5vw]"><img class="w-full sm:w-[30vw]" src={AufDemSofa}></div>
            <div class="sm:max-w-[60%] pb-8 pt-8">
                <h1 class="text-4xl font-playfair mb-8">About me</h1>
                <p>Nathan began his euphonium studies at the age of six. By playing in different ensembles and genres, he soon developed a sense for music playing and performance in different constellations and occasions.</p>
                <p class="mt-2">At age 10, he participated in his first music contest, from whereon he continued to gather competition experience, eventually leading to a <a class="text-theme-bright font-semibold mb-[5px] underline" href="https://dasneueradioseefunk.imsueden.de/musikschule-konstanz-erzielt-hervorragende-ergebnisse-364044/">first price in the prestigious "Bundeswettbewerb Jugend musiziert"</a>, with a full 25 of 25 points being given. </p>
                <p class="mt-2">Nathan has experience playing in multiple ensembles, namely the <a class="text-theme-bright font-semibold mb-[5px] underline" href="https://landesblasorchester.de">symphonic wind orchestra of the state of "Baden-Württemberg"</a> and it's youth counterpart, and is frequently performing both in an ensemble settings as well as as a soloist with piano or concert band. He is also often working as a substitute in wind bands such as the <a class="text-theme-bright font-semibold mb-[5px] underline" href="https://landespolizeiorchester-bw.de">police band of the state of "Baden-Württemberg"</a>.</p>
                <p class="mt-2">Having begun his studies with Steffen Schwartz at the local music school in Constance, Germany, he also took lessons with Michael Müller whilst frequently participating in masterclasses and taking lessons with renowned personalities like Steven Mead and Anne Jelle Visser.</p>
                <p class="mt-2">In autumn 2024, Nathan has now started his bachelor studies in music performance at the <a class="text-theme-bright font-semibold mb-[5px] underline" href="https://hslu.ch">Lucerne conservatory</a> with <a class="text-theme-bright font-semibold mb-[5px] underline" href="https://thomasruedi.ch">Thomas Rüedi</a>.</p>
            </div>
        </div>
    </div>
    -->


    <div id="contact" class="p-16 relative w-full h-auto bg-theme-dim flex sm:flex-row flex-col items-center justify-center flex-grow">
        <div class="relative max-w-[400px] text-center">
            <h1 class="text-4xl font-playfair mb-8">Connect with us</h1>
            <p>If you have any questions, want to work together on a project or just chat, We'd love to hear from you! <br> Feel free to reach out via <a class="text-theme-bright font-semibold mb-[5px] underline" href="https://www.instagram.com/amabile.brass">social media</a> or <a class="text-theme-bright font-semibold mb-[5px] underline" href="mailto:info@amabilebrass.de">email</a>.</p>
        </div>
    </div>


    <div class="bg-white flex flex-col md:flex-row items-start justify-between p-16 pr-48 flex-grow">
        <div class="flex flex-col ">
            <h1 class="font-playfair text-4xl text-left mb-4" >Amabile Brass</h1>

            <a href="mailto:info@nathanzumbusch.de">info@amabilebrass.de</a>
        </div>

        <div  class="font-playfair text-2xl flex flex-col md:flex-row justify-between items-start mt-8 md:mt-0 md:pl-16">
            <div class="md:pr-48">
                <h2>Find us on Social Media</h2>

                <div class="mt-4 flex flex-row">
                    {#each socialMedia as media}
                    <a href="{media[1]}" class="mr-4 last:mr-0 flex items-center justify-center h-[3rem] w-[3rem] rounded-full border-2 border-black"><Icon icon="{media[0]}" width="1.2rem" height="1.2rem" /></a>
                    {/each}
                </div>
            </div>
            <div class="mt-8 md:mt-0">
                <h2>Work with us</h2>

                <div class="mt-4 flex flex-row">
                    <a href="mailto:info@amabilebrass.de" class="bg-theme-dim-alternate font-rubik font-semibold text-sm pl-4 pr-4 mr-4 last:mr-0 w-auto text-nowrap flex-nowrap flex items-center justify-center h-[3rem] rounded-full">Get in touch</a>
                </div>
            </div>
        </div>
    </div>
</main>




<style>

    :root {
        --primary-color: #9160D6; /* Vert moderne */
        --secondary-color: #CBB3BF; /* Fond sombre */
        --accent-color: #535353; /* Gris foncé */
        --text-color: #121212;
        --background-color: #191414; /* Fond légèrement plus clair */
    }




.dropdown button {
    padding: 12px 24px;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    
}

input[type="text"],
input[type="date"],
select {
    padding: 12px;
    border: 1px solid var(--accent-color);
    border-radius: 5px;
    font-size: 16px;
    background-color: var(--secondary-color);
    color: var(--text-color);
    flex-grow: 1;
}

input::placeholder {
    color: var(--accent-color);
}

#searchInput {
    padding-left: 20px;
    flex-grow: 2;
}

button {
    padding: 12px 24px;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: var(--accent-color);
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    background-color: var(--secondary-color);
    min-width: 250px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    z-index: 1;
    padding: 20px;
    border-radius: 5px;
}

.dropdown-content.active {
    display: block;
    margin-top: 10px;
}

.toolbar {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background-color: var(--secondary-color);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    }

    .search-container {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .dropdown button {
        padding: 8px 12px;
        background-color: #CBB3BF;

        color: black;
        border: 2px solid #CBB3BF;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        transition: background-color 0.3s ease;
    }

    input[type="text"],
    input[type="date"],
    select {
        padding: 12px;
        border: 1px solid var(--accent-color);
        border-radius: 5px;
        font-size: 16px;
        background-color: var(--secondary-color);
        color: var(--text-color);
        flex-grow: 1;

        width: 100%;
    }

    input::placeholder {
        color: var(--accent-color);
    }

    #searchInput {
        padding-left: 20px;
        flex-grow: 2;
    }

    button {
        padding: 12px 24px;
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        transition: background-color 0.3s ease;
    }

    button:hover {
        transform: scale(1.03);
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: var(--secondary-color);
        min-width: 250px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
        z-index: 1;
        padding: 20px;
        border-radius: 5px;
    }

    .dropdown-content.active {
        display: block;
    }

    .filter-group {
        margin-bottom: 15px;
    }

    .filter-group label {
        display: block;
        margin-bottom: 5px;
        color: #121212;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        .toolbar {
            flex-direction: column;
            align-items: stretch;
        }

        .search-container {
            flex-direction: column;
            align-items: stretch;
        }

        .dropdown-content {
            width: 100%;
            left: 0;
        }
    }

</style>