<script lang="ts">
  export let loading: boolean = false;
  export let icon: any = undefined;
  export let iconPosition: 'left' | 'right' = 'left';
  export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let fullWidth: boolean = false;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled: boolean = false;
  export let extendedClass: string = '';
  export let href: string | undefined = undefined; // Determines if this should render as <a>

  const baseClasses = 'items-center justify-content gap-2 rounded font-medium cursor-pointer transition-all duration-200 border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:opacity-60 disabled:cursor-not-allowed relative';

  const variantClasses = {
    primary: 'bg-[#ffffff] text-gray-800 border-[#ffffff] hover:bg-[#ffefc2] hover:border-[#ffefc2] disabled:hover:bg-[#ffefc2] disabled:hover:border-[#ffefc2]',
    secondary: 'bg-gray-500 text-white border-gray-500 hover:bg-gray-600 hover:border-gray-600 disabled:hover:bg-gray-500 disabled:hover:border-gray-500',
    outline: 'bg-transparent text-[#ffffff] hover:text-black border-[#ffffff] hover:border-[#ffefc2] hover:bg-[#ffefc2] hover:bg-opacity-10 disabled:hover:bg-transparent',
    ghost: 'bg-transparent text-[#ffefc2] border-transparent hover:bg-[#ffefc2] hover:bg-opacity-10 disabled:hover:bg-transparent',
    danger: 'bg-red-500 text-white border-red-500 hover:bg-red-600 hover:border-red-600 disabled:hover:bg-red-500 disabled:hover:border-red-500'
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-5 text-base'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  $: buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    extendedClass
  ].filter(Boolean).join(' ');
</script>

{#if href}
  <!-- Render as link -->
  <a
    href={disabled || loading ? undefined : href}
    class={buttonClasses}
    aria-disabled={disabled || loading}
    tabindex={disabled || loading ? -1 : 0}
    on:click
    on:focus
    on:blur
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    {#if loading}
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
      </div>
      <span class="sr-only">Loading</span>
    {/if}

    {#if icon && iconPosition === 'left' && !loading}
      <span class="inline-flex -ml-1">
        <svelte:component this={icon} />
      </span>
    {/if}

    <span class="inline-flex items-center" class:invisible={loading}>
      <slot />
    </span>

    {#if icon && iconPosition === 'right' && !loading}
      <span class="inline-flex -mr-1">
        <svelte:component this={icon} />
      </span>
    {/if}
  </a>
{:else}
  <!-- Render as button -->
  <button
    type={type}
    class={buttonClasses}
    {disabled}
    aria-disabled={disabled || loading}
    on:click
    on:focus
    on:blur
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    {#if loading}
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
      </div>
      <span class="sr-only">Loading</span>
    {/if}

    {#if icon && iconPosition === 'left' && !loading}
      <span class="inline-flex -ml-1">
        <svelte:component this={icon} />
      </span>
    {/if}

    <span class="inline-flex items-center" class:invisible={loading}>
      <slot />
    </span>

    {#if icon && iconPosition === 'right' && !loading}
      <span class="inline-flex -mr-1">
        <svelte:component this={icon} />
      </span>
    {/if}
  </button>
{/if}

<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
