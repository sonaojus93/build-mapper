export default function Options() {

    return (
        <div role="tablist" className="tabs tabs-lifted m-2 text-secondary-content border-secondary">
            <input type="radio" name="my_tabs_2" role="tab" className="tab text-inherit" aria-label="Tab 1" />
            <div role="tabpanel" className="tab-content border-secondary rounded-box p-6">
                Tab content 1
            </div>

            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-inherit"
                aria-label="Tab 2"
                defaultChecked />
            <div role="tabpanel" className="tab-content border border-secondary rounded-box p-6">
                Tab content 2
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab text-inherit" aria-label="Tab 3" />
            <div role="tabpanel" className="tab-content border border-secondary rounded-box p-6">
                Tab content 3
            </div>
        </div>
    )
}