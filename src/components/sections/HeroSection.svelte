<script lang="ts">
    import Button from "$components/ui/Button.svelte";

    const cvUrl = 'https://drive.google.com/file/d/1-r-aIvmF1hJ4SnrkmvliiA3PrI6T_WPi/view';
    const cv = () => {
        window.open(cvUrl, '_blank', 'noopener,noreferrer')
    }
</script>

<section class="pt-15 margin-default ">
<h1 class="text-xl">Hello! I'm Zwe Linn Maung</h1>
<div class="underscore mb-8"></div>
<h1 class="heading-3 lg:heading-2 xl:heading-1">I'm a full stack developer</h1>
<h1 class="heading-4 lg:heading-3 xl:heading-2 dark-gray mb-6">Turn ideas into digital solutions</h1>
<Button onClick={cv}>Get My CV</Button>
</section>
