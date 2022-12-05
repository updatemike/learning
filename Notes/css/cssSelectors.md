# Selectors

| Selector               | Dscription (selects)        |
| ---------------------- | --------------------------- |
| `*`                    | all                         |
| `head`                 | `head` tag                  |
| `red`                  | `"red"` class               |
| `#nav`                 | `"nav"` id                  |
| `div.row`              | `div` tag AND `"row"` class |
| `[aria-hidden="true"]` | `aria-hidden` attribute     |

<!-- | ``                     |                             | -->

| Selector combination | Description (selects)                                      |
| -------------------- | ---------------------------------------------------------- |
| `li a`               | `a` tags children of `li` tags                             |
| `div.row *`          | all descendants of elements with `div` tag AND `row` class |
| `li > a`             | `a` elements direct descendants of `li` elements           |
| `li + a`             | FIRST `a` after each `li`                                  |
| `li, a`              | all `a` elements and all `li` elements                     |
| `li ~ a`             | all `a` after `li` that are siblings of `li`               |

| Pseudo-selectors | Description (selects)                                       |
| ---------------- | ----------------------------------------------------------- |
| `:first-child`   | first child of element                                      |
| `:last-child`    | last child of element                                       |
| `:nth-child()`   | nth child of element. accepts integers, even, odd, formulas |
| `a::not(.name)`  | all `a` elements not of `name` class                        |
| `::after`        | allows inserting content after the element                  |
| `::before`       | allow inseting content before the element                   |
| `:hover`         | element being hovered                                       |
| `:focus`         | element being focused                                       |
| `:active`        | element being clicked by mouse pointer                      |
| `:link`          | links that have not been clicked yet                        |
| `:visited`       | links that have already been clicked                        |
