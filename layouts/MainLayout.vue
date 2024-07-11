<template>
  <div id="MainLayout" class="h-screen">
    <div class="w-full max-w-[500px] mx-auto">
      <div id="TopMenu" class="w-full flex items-center justify-center px-2 h-10 my-2">
        <img class="w-[35px]" src="/threads-logo.png" alt="threads logo">
      </div>
    </div>

    <div class="flex w-full max-w-[500px] mx-auto h-screen">
      <slot />
    </div>

    <div id="ButtonNav" class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-gray-500 bg-black">
      <div class="w-full max-w-[500px] mx-auto flex items-center justify-around">
        <button @click="navigateTo('/')" class="w-full h-full">
          <Icon name="material-symbols:home-outline" size="35" color="#ffff"/>
        </button>
        <button class="w-full h-full" @click="userStore.isMenuOverlay = true">
          <Icon name="material-symbols:edit-square-outline-rounded" class="mb-1" size="35" color="#ffff"/>
        </button>
        <button class="w-full h-full"  @click="userStore.isLogoutOverlay = true">
          <Icon name="ph:sign-out" class="mb-1" size="35" color="#ffff"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useUserStore } from "~/stores/user";
  const userStore = useUserStore()

  const client = useSupabaseClient()
  const user = useSupabaseUser()
</script>