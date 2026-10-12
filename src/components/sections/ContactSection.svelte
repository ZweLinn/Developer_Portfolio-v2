<script lang="ts">
    import SectionHeadline from "$components/ui/SectionHeadline.svelte";
    const email = "zewlinnmg@gmail.com";


    const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
    const WEB3FORMS_ACCESS_KEY = "a001cb5b-3eba-4590-b6bf-2cf07e697b8e";
    const socials = [
        {
            name: "GitHub",
            url: "https://github.com/ZweLinn",
            icon: "github",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/zwe-linn-maung-7638a2301",
            icon: "linkedin",
        },
    ];

    let name = $state("");
    let emailAddress = $state("");
    let message = $state("");
    let errors = $state<{ name?: string; email?: string; message?: string }>({});
    let submitted = $state(false);
    let submitting = $state(false);
    let submitError = $state("");

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();

        const nextErrors: typeof errors = {};

        if (!name.trim()) nextErrors.name = "Please enter your name.";

        if (!emailAddress.trim()) {
            nextErrors.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
            nextErrors.email = "Please enter a valid email address.";
        }

        if (!message.trim()) nextErrors.message = "Please enter a message.";

        errors = nextErrors;

        if (Object.keys(nextErrors).length > 0) return;

        submitting = true;
        submitted = false;
        submitError = "";

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name,
                    email: emailAddress,
                    message,
                }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Request failed");
            }

            submitted = true;
            name = "";
            emailAddress = "";
            message = "";
        } catch {
            submitError =
                "Something went wrong sending your message. Please try again or email me directly.";
        } finally {
            submitting = false;
        }
    }


    const fieldClasses =
        "w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-base " +
        "text-black outline-none transition-colors placeholder:text-zinc-500 " +
        "focus:border-black dark:border-zinc-700 dark:text-white " +
        "dark:placeholder:text-zinc-400 dark:focus:border-white";
</script>

<section class="mt-16">
    <SectionHeadline sectionName="Contact">Let's talk</SectionHeadline>

    <div
        class="margin-default mt-8 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between"
    >
        <!-- Form -->
        <form
            onsubmit={handleSubmit}
            novalidate
            class="flex w-full flex-col gap-5 lg:w-[55%]"
        >
            <div class="flex flex-col gap-1">
                <input
                    type="text"
                    bind:value={name}
                    placeholder="Your name"
                    aria-label="Your name"
                    aria-invalid={errors.name ? "true" : undefined}
                    class:border-red-500={errors.name}
                    class:focus:border-red-500={errors.name}
                    class={fieldClasses}
                />
                {#if errors.name}
                    <p class="text-sm text-red-500">{errors.name}</p>
                {/if}
            </div>

            <div class="flex flex-col gap-1">
                <input
                    type="email"
                    bind:value={emailAddress}
                    placeholder="Your email"
                    aria-label="Your email"
                    aria-invalid={errors.email ? "true" : undefined}
                    class:border-red-500={errors.email}
                    class:focus:border-red-500={errors.email}
                    class={fieldClasses}
                />
                {#if errors.email}
                    <p class="text-sm text-red-500">{errors.email}</p>
                {/if}
            </div>

            <div class="flex flex-col gap-1">
                <textarea
                    bind:value={message}
                    placeholder="Your message"
                    aria-label="Your message"
                    aria-invalid={errors.message ? "true" : undefined}
                    rows="5"
                    class:border-red-500={errors.message}
                    class:focus:border-red-500={errors.message}
                    class="{fieldClasses} resize-none"
                ></textarea>
                {#if errors.message}
                    <p class="text-sm text-red-500">{errors.message}</p>
                {/if}
            </div>

            <button
                type="submit"
                disabled={submitting}
                class="btn-primary-sm md:btn-primary-md lg:btn-primary bg-black text-white dark:bg-white dark:text-black self-start disabled:cursor-not-allowed disabled:opacity-60"
            >
                {submitting ? "Sending..." : "Send message"}
            </button>

            {#if submitted}
                <p
                    role="status"
                    class="text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                    Thanks for reaching out! I'll get back to you soon.
                </p>
            {/if}

            {#if submitError}
                <p role="alert" class="text-sm font-medium text-red-500">
                    {submitError}
                </p>
            {/if}
        </form>

        <!-- Contact info -->
        <div class="w-full lg:w-[40%]">
            <h3 class="mb-4 text-xl font-semibold">Tell me about your project</h3>
            <p class="mb-4 dark-gray">
                Have a project in mind, or just want to say hi? I'd love to hear
                from you.
            </p>
            <p class="mb-8 dark-gray">
                Send me a message and I'll reply as soon as I can.
            </p>

            <a
                href={`mailto:${email}`}
                class="group inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="h-5 w-5"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                </svg>
                {email}
            </a>

            <div class="mt-6 flex gap-4">
                {#each socials as social (social.name)}
                    <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        class="text-zinc-600 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
                    >
                        {#if social.icon === "github"}
                            <i class="devicon-github-original text-3xl"></i>
                        {:else if social.icon === "linkedin"}
                            <i class="devicon-linkedin-plain text-3xl"></i>
                        {/if}
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>
