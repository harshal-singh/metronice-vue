<template>
	<div class="h-screen grid lg:grid-cols-2 grow">
		<!-- Right Panel - Branding -->
		<div
			class="lg:rounded-xl lg:m-5 order-1 bg-top xxl:bg-center xl:bg-cover bg-no-repeat branded-bg">
			<div
				class="flex flex-col justify-between p-5 md:p-8 lg:p-16 gap-4 md:gap-8 h-full">
				<a href="/">
					<img class="h-[28px] max-w-none" src="/media/app/mini-logo.svg" />
				</a>
				<div class="flex flex-col gap-4 md:gap-8">
					<h3 class="text-md md:text-2xl font-semibold dark:text-background">
						Quality Management Services
					</h3>
					<h1 class="text-2xl md:text-5xl font-black dark:text-background">
						Business Management System
					</h1>
					<div
						class="text-sm md:text-base font-medium text-secondary-foreground dark:text-background">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
						velit, vulputate eu pharetra nec, mattis ac neque.
					</div>
				</div>
			</div>
		</div>
		<!-- Left Panel - Login Form -->
		<div class="flex justify-center items-center p-0 md:p-8 lg:p-10 order-2">
			<div class="kt-card shadow-none border-none max-w-[480px] w-full">
				<form @submit.prevent="handleSubmit" autocomplete="off">
					<div class="kt-card-content flex flex-col gap-6">
						<div class="text-center mb-2.5">
							<h2 class="text-2xl lg:text-3xl font-bold leading-none mb-2.5">
								Sign in
							</h2>
							<div
								class="text-sm lg:text-base font-medium text-muted-foreground">
								Log in by entering your email address and password.
							</div>
						</div>

						<!-- Email Input -->
						<div class="flex flex-col gap-2">
							<label class="kt-form-label font-normal"> Email address </label>
							<div
								class="kt-input kt-input-lg"
								:class="{ 'border-red-500': errors.email && touched.email }">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-mail"
									aria-hidden="true">
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
									<rect x="2" y="4" width="20" height="16" rx="2"></rect></svg
								><input
									v-model="email"
									placeholder="email@email.com"
									type="email"
									@blur="touchField('email')"
									@keypress.enter="handleSubmit" />
							</div>
							<div
								v-if="errors.email && touched.email"
								class="flex items-center gap-1 mt-1">
								<svg
									class="size-4 text-red-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span class="text-xs text-red-600">{{ errors.email }}</span>
							</div>
						</div>

						<!-- Password Input -->
						<div class="flex flex-col gap-2">
							<div class="flex items-center justify-between gap-1">
								<label class="kt-form-label font-normal"> Password </label>
								<a class="text-sm kt-link shrink-0" href="/forgot-password">
									Forgot Password?
								</a>
							</div>
							<div
								class="kt-input kt-input-lg"
								:class="{
									'border-red-500': errors.password && touched.password,
								}">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-lock"
									aria-hidden="true">
									<rect
										x="3"
										y="11"
										width="18"
										height="11"
										rx="2"
										ry="2"></rect>
									<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
								</svg>
								<input
									v-model="password"
									:type="showPassword ? 'text' : 'password'"
									placeholder="Enter Password"
									autocomplete="off"
									@blur="touchField('password')"
									@keypress.enter="handleSubmit" />
								<button
									class="kt-btn kt-btn-sm kt-btn-ghost kt-btn-icon bg-transparent! -me-1.5"
									type="button"
									@click="showPassword = !showPassword">
									<span v-if="!showPassword">
										<i class="ki-filled ki-eye text-muted-foreground"></i>
									</span>
									<span v-else>
										<i class="ki-filled ki-eye-slash text-muted-foreground"></i>
									</span>
								</button>
							</div>
							<div
								v-if="errors.password && touched.password"
								class="flex items-center gap-1 mt-1">
								<svg
									class="size-4 text-red-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span class="text-xs text-red-600">{{ errors.password }}</span>
							</div>
						</div>

						<!-- Remember Me -->
						<label class="kt-label">
							<input
								v-model="rememberMe"
								class="kt-checkbox kt-checkbox-lg"
								type="checkbox" />
							<span class="kt-checkbox-label"> Remember me </span>
						</label>

						<!-- Submit Button -->
						<button
							class="kt-btn kt-btn-primary kt-btn-lg flex justify-center grow"
							:disabled="isLoading"
							type="submit">
							{{ isLoading ? 'Logging in...' : 'Log in' }}
						</button>

						<!-- Error Message -->
						<div
							v-if="errors.submit"
							class="p-3 bg-red-50 border border-red-200 rounded-md">
							<p class="text-sm text-red-600">{{ errors.submit }}</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const email = ref('admin@example.com');
const password = ref('Password@123');
const showPassword = ref(false);
const rememberMe = ref(false);
const isLoading = ref(false);

const touched = reactive({
	email: false,
	password: false,
});

const errors = reactive({
	email: '',
	password: '',
	submit: '',
});

// Password validation
const validatePassword = (pwd: string) => {
	const validations = {
		length: pwd.length >= 8,
		uppercase: /[A-Z]/.test(pwd),
		lowercase: /[a-z]/.test(pwd),
		number: /[0-9]/.test(pwd),
		special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
	};

	const allValid = Object.values(validations).every((v) => v);
	return { validations, isValid: allValid };
};

// Email validation
const validateEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

// Touch field
const touchField = (field: 'email' | 'password') => {
	touched[field] = true;
	validateForm();
};

// Validate form
const validateForm = () => {
	let isValid = true;

	if (touched.email || email.value) {
		if (!email.value) {
			errors.email = 'Email address is required';
			isValid = false;
		} else if (!validateEmail(email.value)) {
			errors.email = 'Please enter a valid email address';
			isValid = false;
		} else {
			errors.email = '';
		}
	}

	if (touched.password || password.value) {
		if (!password.value) {
			errors.password = 'Password is required';
			isValid = false;
		} else {
			const validation = validatePassword(password.value);
			if (!validation.isValid) {
				errors.password = 'Password does not meet strength requirements';
				isValid = false;
			} else {
				errors.password = '';
			}
		}
	}

	return isValid;
};

// Handle submit
const handleSubmit = async () => {
	touched.email = true;
	touched.password = true;

	if (!validateForm()) {
		return;
	}

	isLoading.value = true;
	errors.submit = '';

	try {
		await authStore.login(email.value, password.value);
		// Redirect to stocks page after successful login
		router.push('/stocks');
	} catch (error) {
		errors.submit = 'Login failed. Please try again.';
	} finally {
		isLoading.value = false;
	}
};
</script>

<script lang="ts">
import { defineComponent } from 'vue';

// Password Requirement Component
const PasswordRequirement = defineComponent({
	name: 'PasswordRequirement',
	props: {
		met: {
			type: Boolean,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
	template: `
    <div class="flex items-center text-xs">
      <svg
        v-if="met"
        class="size-4 text-green-600 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div v-else class="size-4 rounded-full border-2 border-gray-300 mr-2"></div>
      <span :class="met ? 'text-green-700 font-medium' : 'text-gray-600'">
        {{ text }}
      </span>
    </div>
  `,
});

export { PasswordRequirement };
</script>

<style scoped>
/* Add KT UI custom styles if needed */
.branded-bg {
	background-image: url('/media/images/2600x1200/bg-7.png');
}
</style>
