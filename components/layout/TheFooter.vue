<script setup lang="ts">
// No specific logic needed for this static footer
</script>

<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__left">
                <p class="footer__question">Is there a project?</p>
                <h2 class="footer__title">
                    Let’s work<br /><span>together</span>
                </h2>
            </div>
            <div class="footer__right">
                <div class="footer__contact">
                    <p class="footer__label">For all questions</p>
                    <p class="footer__phone">+7 (920) 278——68</p>
                    <p class="footer__email">qtim@agency.com</p>
                </div>
                <div class="footer__locations">
                    <div class="footer__location">
                        <p class="footer__label">Office in Russia</p>
                        <p>139 Ruben Station Lake<br />Drew, NM 52678</p>
                        <button class="footer__icon-button">
                            <i class="footer__icon">&#9993;</i>
                        </button>
                    </div>
                    <div class="footer__location">
                        <p class="footer__label">Office in Dubai</p>
                        <p>139 Ruben Station Lake<br />Drew, NM 52678</p>
                        <button class="footer__icon-button">
                            <i class="footer__icon">&#9993;</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <nav class="footer__socials">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Telegram</a>
            </nav>
            <button class="footer__go">Go</button>
            <nav class="footer__links">
                <a href="#">Behance</a>
                <a href="#">LinkedIn</a>
                <a href="#">Privacy Policy</a>
            </nav>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: $purple-100;
    color: $base-900;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1200px;
        margin-bottom: 4rem;
    }

    &__left {
        flex: 1;
        min-width: 300px;
    }

    &__question {
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
    }

    &__title {
        font-size: 3rem;
        font-weight: 500;
        span {
            text-decoration: underline;
            display: inline-block;
        }
    }

    &__right {
        flex: 1;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    &__label {
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    &__phone,
    &__email {
        margin: 0.25rem 0;
    }

    &__locations {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    &__location {
        position: relative;
    }

    &__icon-button {
        background: $base-900;
        border: none;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $white;
        cursor: pointer;
        margin-top: 0.5rem;
    }

    &__icon {
        font-size: 14px;
    }

    &__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        flex-wrap: wrap;
    }

    &__socials,
    &__links {
        display: flex;
        gap: 1.5rem;

        a {
            color: $base-900;
            text-decoration: underline;
            font-size: 0.875rem;
        }
    }

    &__go {
        background-color: $base-900;
        color: $white;
        border: none;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
