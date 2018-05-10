import { Directive, ElementRef, Renderer, Input } from '@angular/core';
var FroalaViewDirective = (function () {
    function FroalaViewDirective(renderer, element) {
        this.renderer = renderer;
        this._element = element.nativeElement;
    }
    Object.defineProperty(FroalaViewDirective.prototype, "froalaView", {
        set: 
        // update content model as it comes
        function (content) {
            this._element.innerHTML = content;
        },
        enumerable: true,
        configurable: true
    });
    FroalaViewDirective.prototype.ngAfterViewInit = function () {
        this.renderer.setElementClass(this._element, "fr-view", true);
    };
    FroalaViewDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[froalaView]'
                },] },
    ];
    /** @nocollapse */
    FroalaViewDirective.ctorParameters = function () { return [
        { type: Renderer, },
        { type: ElementRef, },
    ]; };
    FroalaViewDirective.propDecorators = {
        "froalaView": [{ type: Input },],
    };
    return FroalaViewDirective;
}());
export { FroalaViewDirective };
//# sourceMappingURL=view.directive.js.map