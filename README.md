# \<xdv-checkbox-switch>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @xiul/xdv-checkbox-switch
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
| --xdv-switch-bar-bg          | Bar background         | #bcbcbc          |
| --xdv-switch-bar-bg-checked  | Bar background checked | #bcbcbc          |


| Custom property  Check              | Description                   | Default            |
|-------------------------------------|-------------------------------|--------------------|
| --xdv-switch-item-width-height      | Item width and height         | 1.25rem            | 
| --xdv-switch-item-radius            | Item radius                   | 1.5625rem          |
| --xdv-switch-item-bg                | Item background               | #707070            |
| --xdv-switch-item-bg-checked        | Item background checked       | #18723e            |
| --xdv-switch-item-initial-position  | Item initial position         | 0.125rem 0.125rem  |
| --xdv-switch-item-checked-position  | Item initial position checked | 1.375rem 0.125rem  |


| Custom property  default          | Description            | Default          |
|-----------------------------------|------------------------|------------------|
| --text-color                      | TExt color             | #4a4a4a          | 


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
