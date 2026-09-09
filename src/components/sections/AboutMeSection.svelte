<script lang="ts">
    import SectionHeadline from "$components/ui/SectionHeadline.svelte";
    import image from "$assets/Portrait.jpg";
</script>

<section class="about-me mt-16">
    <SectionHeadline sectionName="About Me">About Me</SectionHeadline>

    <div class="flex flex-col md:flex-row justify-between margin-default mt-8 items-stretch">
        <img src={image} alt="My Portrait" class="image" />
        <div class="text">
            <p class="mb-4 ">
                Hey, I'm Niklas, the driving force behind my freelancing agency
                specializing in web development and data science.
            </p>
            <p class="mb-4">
                With years of hands-on experience tackling real-world coding
                challenges and meeting diverse client needs, I've built a deep
                understanding of the tech landscape. But beyond coding, my true
                passion lies in teaching. I've had the privilege of guiding
                hundreds of aspiring developers, focusing on making coding both
                practical and accessible. My goal is to translate complex
                concepts into actionable skills that you can apply right away.
            </p>
            <p class="mb-4">
                Through my courses, I’m committed to sharing the insights and
                lessons I’ve learned in the field, so you can skip the pitfalls
                and fast-track your development journey. If you're eager to
                learn from real-world experience and practical know-how, let's
                dive in together.
            </p>
        </div>
    </div>
</section>
