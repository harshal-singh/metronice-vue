<script setup lang="ts">
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '../../stores/auth';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();

const handleLogout = () => {
	authStore.logout();
	router.push('/login');
};

const isActivePath = (path: string) => {
	return route.path === path || route.path.startsWith(`${path}/`);
};

const baseLinkClasses =
	'kt-menu-label border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px] rounded-md transition-colors';
const activeLinkClasses = 'bg-primary/10 border-primary text-primary';
</script>

<template>
	<!-- Sidebar -->
	<div
		class="kt-sidebar bg-background border-e border-e-border fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0 h-full [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]"
		data-kt-drawer="true"
		data-kt-drawer-class="kt-drawer kt-drawer-start top-0 bottom-0"
		id="sidebar">
		<div
			class="kt-sidebar-content flex grow shrink-0 py-5"
			id="sidebar_content">
			<div
				class="kt-scrollable-y-hover grow shrink-0 flex ps-2 lg:ps-5 pe-1 lg:pe-3"
				data-kt-scrollable="true"
				data-kt-scrollable-dependencies="#sidebar_header"
				data-kt-scrollable-height="auto"
				data-kt-scrollable-offset="0px"
				data-kt-scrollable-wrappers="#sidebar_content"
				id="sidebar_scrollable">
				<!-- Sidebar Menu -->
				<div
					class="kt-menu flex flex-col grow gap-1"
					data-kt-menu="true"
					data-kt-menu-accordion-expand-all="false"
					id="sidebar_menu">
					<div class="kt-menu-item pt-2.25 pb-px">
						<span
							class="kt-menu-heading uppercase text-xs font-medium text-muted-foreground ps-[10px] pe-[10px]">
							Pages
						</span>
					</div>
					<div class="kt-menu-item">
						<RouterLink
							:class="[
								baseLinkClasses,
								isActivePath('/stocks') && activeLinkClasses,
							]"
							to="/stocks"
							tabindex="0">
							<span
								:class="[
									'kt-menu-icon items-start w-[20px]',
									isActivePath('/stocks')
										? 'text-primary'
										: 'text-muted-foreground',
								]">
								<i class="ki-filled ki-category text-lg"> </i>
							</span>
							<span
								:class="[
									'kt-menu-title text-sm font-medium',
									isActivePath('/stocks') ? 'text-primary' : 'text-foreground',
								]">
								Stocks
							</span>
						</RouterLink>
					</div>
					<div class="kt-menu-item">
						<RouterLink
							:class="[
								baseLinkClasses,
								isActivePath('/products-and-manufacturers') &&
									activeLinkClasses,
							]"
							to="/products-and-manufacturers"
							tabindex="0">
							<span
								:class="[
									'kt-menu-icon items-start w-[20px]',
									isActivePath('/products-and-manufacturers')
										? 'text-primary'
										: 'text-muted-foreground',
								]">
								<i class="ki-filled ki-data text-lg"> </i>
							</span>
							<span
								:class="[
									'kt-menu-title text-sm font-medium',
									isActivePath('/products-and-manufacturers')
										? 'text-primary'
										: 'text-foreground',
								]">
								Products & Manufacturers
							</span>
						</RouterLink>
					</div>
					<div class="kt-menu-item">
						<RouterLink
							:class="[
								baseLinkClasses,
								isActivePath('/parts') && activeLinkClasses,
							]"
							to="/parts"
							tabindex="0">
							<span
								:class="[
									'kt-menu-icon items-start w-[20px]',
									isActivePath('/parts')
										? 'text-primary'
										: 'text-muted-foreground',
								]">
								<i class="ki-filled ki-color-swatch text-lg"> </i>
							</span>
							<span
								:class="[
									'kt-menu-title text-sm font-medium',
									isActivePath('/parts') ? 'text-primary' : 'text-foreground',
								]">
								Parts
							</span>
						</RouterLink>
					</div>
					<div class="kt-menu-item">
						<RouterLink
							:class="[
								baseLinkClasses,
								isActivePath('/product-detail-page') && activeLinkClasses,
							]"
							to="/product-detail-page"
							tabindex="0">
							<span
								:class="[
									'kt-menu-icon items-start w-[20px]',
									isActivePath('/product-detail-page')
										? 'text-primary'
										: 'text-muted-foreground',
								]">
								<i class="ki-filled ki-cheque text-lg"> </i>
							</span>
							<span
								:class="[
									'kt-menu-title text-sm font-medium',
									isActivePath('/product-detail-page')
										? 'text-primary'
										: 'text-foreground',
								]">
								Product Detail Page
							</span>
						</RouterLink>
					</div>
					<div class="kt-menu-item">
						<RouterLink
							:class="[
								baseLinkClasses,
								isActivePath('/services') && activeLinkClasses,
							]"
							to="/services"
							tabindex="0">
							<span
								:class="[
									'kt-menu-icon items-start w-[20px]',
									isActivePath('/services')
										? 'text-primary'
										: 'text-muted-foreground',
								]">
								<i class="ki-filled ki-wrench text-lg"> </i>
							</span>
							<span
								:class="[
									'kt-menu-title text-sm font-medium',
									isActivePath('/services')
										? 'text-primary'
										: 'text-foreground',
								]">
								Services
							</span>
						</RouterLink>
					</div>
					<div class="kt-menu-item pt-2.25 pb-px">
						<span
							class="kt-menu-heading uppercase text-xs font-medium text-muted-foreground ps-[10px] pe-[10px]">
							Others
						</span>
					</div>
					<div class="kt-menu-item">
						<RouterLink
							:class="[
								baseLinkClasses,
								isActivePath('/settings') && activeLinkClasses,
							]"
							to="/settings"
							tabindex="0">
							<span
								:class="[
									'kt-menu-icon items-start w-[20px]',
									isActivePath('/settings')
										? 'text-primary'
										: 'text-muted-foreground',
								]">
								<i class="ki-filled ki-setting text-lg"> </i>
							</span>
							<span
								:class="[
									'kt-menu-title text-sm font-medium',
									isActivePath('/settings')
										? 'text-primary'
										: 'text-foreground',
								]">
								Settings
							</span>
						</RouterLink>
					</div>
					<div class="kt-menu-item">
						<a
							class="kt-menu-label border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]"
							@click="handleLogout"
							tabindex="0"
							role="button">
							<span
								class="kt-menu-icon items-start text-muted-foreground w-[20px]">
								<i class="ki-filled ki-exit-right text-lg"> </i>
							</span>
							<span class="kt-menu-title text-sm font-medium text-foreground">
								Logout
							</span>
						</a>
					</div>
				</div>
				<!-- End of Sidebar Menu -->
			</div>
		</div>
	</div>
	<!-- End of Sidebar -->
</template>
