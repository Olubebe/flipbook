import Button from "./Button"

interface NavigationButtonProps {
	goPrevPage: () => void
	goNextPage: () => void
	currentLocation: number
	maxLocation: number
}

function NavigationButton({goPrevPage, goNextPage, currentLocation, maxLocation}: NavigationButtonProps) {
	return (
      <div className="flex gap-4">
        <Button
          onClick={goPrevPage}
          disabled={currentLocation === 1}
          ariaLabel="Previous page"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </Button>

        <Button
          onClick={goNextPage}
          disabled={currentLocation === maxLocation}
          ariaLabel="Next page"
        >
          Next
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>
	)
}

export default NavigationButton
