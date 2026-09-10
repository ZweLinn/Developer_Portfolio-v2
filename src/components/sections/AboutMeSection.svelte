<script lang="ts">
    import SectionHeadline from "$components/ui/SectionHeadline.svelte";
    import image from "$assets/Portrait.jpg";
    import colorImage from "$assets/color.jpg";
</script>

<section class="about-me mt-16">
    <SectionHeadline sectionName="About Me">About Me</SectionHeadline>

    <div
        class="margin-default mt-8 flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:gap-12 md:text-left"
    >
        <div
            class="group relative w-64 max-w-full transition-transform duration-300 hover:scale-[1.03] sm:w-72 md:w-[40%] md:max-w-sm"
        >
            <img
                src={image}
                alt="My Portrait"
                class="w-full rounded-[20px] object-contain"
            />
            <img
                src={colorImage}
                alt=""
                aria-hidden="true"
                class="absolute inset-0 h-full w-full rounded-[20px] object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
        </div>
        <div class="w-full max-w-xl text-base leading-relaxed sm:text-lg md:w-[55%]">
            <p class="mb-4">
                Hey, I'm Zwe Linn Maung. I'm a full-stack developer based in
                Myanmar, currently living in Thailand. I specialize in building
                modern web applications.
            </p>
            <p class="mb-4">
                I have hands-on experience with AI integration, building
                AI-powered applications and leveraging AI tools to enhance
                development workflows. My deployment expertise includes
                traditional VPS hosting with Nginx and PM2, as well as Docker.
            </p>
            <p class="mb-4">
                I enjoy solving problems, creating user-focused applications,
                and continuously exploring new technologies to deliver
                efficient, scalable solutions.
            </p>
        </div>
    </div>
</section>
