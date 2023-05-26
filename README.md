# \<xdv-checkbox-switch>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i xdv-checkbox-switch
```

## Usage

```html
<script type="module">
  import 'xdv-checkbox-switch/xdv-checkbox-switch.js';
</script>

<xdv-checkbox-switch></xdv-checkbox-switch>
```

**Use the component.**

***Properties***
```html
  <xdv-checkbox-switch
    checked
    disabled
  >
            <p slot='description'>Imagenes fijas o random</p>
  <xdv-checkbox-switch>
```

***Label info***
```html
  <xdv-checkbox-switch>
    <p slot='description'>Imagenes fijas o random</p>
  <xdv-checkbox-switch>
```

***CSS Custom Properties***

| Custom property  Bar         | Description            | Default          |
|------------------------------|------------------------|------------------|
| --xdv-switch-bar-width       | Bar width              | 2.75rem          | 
| --xdv-switch-bar-height      | Bar height             | 1.5rem           |
| --xdv-switch-bar-radius      | Bar radius             | 1.5625rem        |
| --xdv-switch-bar-bg          | Bar background         | --grey-inactive  |
| --xdv-switch-bar-bg-checked  | Bar background checked | --grey-inactive  |


| Custom property  Check              | Description            | Default            |
|-------------------------------------|------------------------|--------------------|
| --xdv-switch-item-width-height      | Bar width              | 1.25rem            | 
| --xdv-switch-item-radius            | Bar height             | 1.5625rem          |
| --xdv-switch-item-bg                | Bar radius             | --grey-tertiary    |
| --xdv-switch-item-bg-checked        | Bar radius             | --soft-excel       |
| --xdv-switch-item-initial-position  | Bar background         | 0.125rem 0.125rem  |
| --xdv-switch-item-checked-position  | Bar background checked | 1.375rem 0.125rem  |


| Custom property  default          | Description            | Default          |
|-----------------------------------|------------------------|------------------|
| --text-color                      | Bar width              | --grey-primary   | 


## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
