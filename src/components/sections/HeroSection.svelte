<script lang="ts">
    import Button from "$components/ui/Button.svelte";
    import  SectionHeadline  from "$components/ui/SectionHeadline.svelte";

    const cvUrl = 'https://drive.google.com/file/d/10n0NnNQCVzNzD4X6kuawm536diVx4jnv/view';
    const cv = () => {
        window.open(cvUrl, '_blank', 'noopener,noreferrer')
    }
</script>

<section class="pt-8 margin-default ">
<h1 class="text-xl">Hello! I'm Zwe Linn Maung</h1>
<div class="underscore mb-4"></div>
<h1 class="heading-3 lg:heading-2 xl:heading-1">I'm a full stack developer</h1>
<h1 class="heading-4 lg:heading-3 xl:heading-2 dark-gray mb-4">Turn ideas into digital solutions</h1>
<Button onClick={cv}>Get My CV</Button>
</section>
