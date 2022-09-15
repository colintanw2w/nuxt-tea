<template>
    <div>
        <BaseButton color="transparent" to="/dashboard" class="nav-link">
            <font-awesome-icon :icon="['fas', 'grip-vertical']" />
            <span>Dashboard</span>
        </BaseButton>
        <BaseButton color="transparent" to="/momentopnames" class="nav-link">
            <font-awesome-icon :icon="['fas', 'list-check']" />
            <span>Momentopnames</span>
        </BaseButton>
        <BaseButton color="transparent" class="nav-link" to="/">
            <font-awesome-icon :icon="['fas', 'route']" />
            <span>Actieplan</span>
        </BaseButton>
        <BaseButton color="transparent" class="nav-link" to="/examples">
            <font-awesome-icon :icon="['fas', 'circle-question']" />
            <span>Kenniscentrum</span>
        </BaseButton>
    </div>
</template>
