import Button from "../button";
import Icon from "../icons";

type PaginationProps = {
  total: number;
  selectedPage: number;
  pageSize: number;
  onNext?: () => void;
  onPrev?: () => void;
  onClick?: (page: number) => void;
};

const Pagination = ({
  total,
  pageSize,
  selectedPage,
  onClick,
  onNext,
  onPrev,
}: PaginationProps) => {
  const pages = Math.ceil(total / pageSize);

  const renderButtons = (pageSize: number) => {
    const buttons = [];

    if (pages < 5) {
      for (let i = 0; i < pages; i++) {
        buttons.push(
          <Button
            square
            size="sm"
            key={i}
            onClick={() => {
              onClick?.(i + 1);
            }}
            {...(i + 1 !== selectedPage && {
              variant: "border",
            })}
          >
            {i + 1}
          </Button>
        );
      }
    } else {
      if (selectedPage <= 3) {
        for (let i = 0; i < 4; i++) {
          buttons.push(
            <Button
              square
              size="sm"
              key={i}
              onClick={() => {
                onClick?.(i + 1);
              }}
              {...(i + 1 !== selectedPage && {
                variant: "border",
              })}
            >
              {i + 1}
            </Button>
          );
        }

        buttons.push(
          <Button square size="sm" variant="border" key={4}>
            ...
          </Button>
        );

        buttons.push(
          <Button
            square
            size="sm"
            key={5}
            onClick={() => {
              onClick?.(pages);
            }}
            variant="border"
          >
            {pages}
          </Button>
        );
      } else if (selectedPage > 3 && selectedPage < pages - 2) {
        buttons.push(
          <Button
            square
            size="sm"
            key={selectedPage - 4}
            onClick={() => {
              onClick?.(1);
            }}
            {...(1 !== selectedPage && {
              variant: "border",
            })}
          >
            {1}
          </Button>
        );

        buttons.push(
          <Button square size="sm" variant="border" key={selectedPage - 3}>
            ...
          </Button>
        );

        for (let i = selectedPage - 2; i < selectedPage + 1; i++) {
          buttons.push(
            <Button
              square
              size="sm"
              key={i}
              onClick={() => {
                onClick?.(i + 1);
              }}
              {...(i + 1 !== selectedPage && {
                variant: "border",
              })}
            >
              {i + 1}
            </Button>
          );
        }

        buttons.push(
          <Button square size="sm" variant="border" key={selectedPage + 2}>
            ...
          </Button>
        );

        buttons.push(
          <Button
            square
            size="sm"
            key={selectedPage + 3}
            onClick={() => {
              onClick?.(pages);
            }}
            {...(1 !== selectedPage && {
              variant: "border",
            })}
          >
            {pages}
          </Button>
        );
      } else {
        buttons.push(
          <Button
            square
            size="sm"
            key={0}
            onClick={() => {
              onClick?.(1);
            }}
            {...(1 !== selectedPage && {
              variant: "border",
            })}
          >
            {1}
          </Button>
        );

        buttons.push(
          <Button square size="sm" variant="border" key={1}>
            ...
          </Button>
        );

        for (let i = pages - 4; i < pages; i++) {
          buttons.push(
            <Button
              square
              size="sm"
              key={i + 1}
              onClick={() => {
                onClick?.(i + 1);
              }}
              {...(i + 1 !== selectedPage && {
                variant: "border",
              })}
            >
              {i + 1}
            </Button>
          );
        }
      }
    }

    return buttons;
  };

  return (
    <div className="flex justify-center gap-2 pt-5 pb-5">
      <Button
        square
        variant="border"
        size="sm"
        className="group"
        onClick={() => {
          if (selectedPage === 1) {
            return;
          }

          onPrev?.();
        }}
      >
        <Icon name="chevron-left" className="group-hover:fill-white" />
      </Button>
      {renderButtons(pageSize)}
      <Button
        square
        variant="border"
        size="sm"
        className="group"
        onClick={() => {
          if (selectedPage === pages) {
            return;
          }

          onNext?.();
        }}
      >
        <Icon name="chevron-right" className="group-hover:fill-white" />
      </Button>
    </div>
  );
};

export default Pagination;
